import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { Page, Browser } from 'puppeteer'
import { logger } from './logger'
import { Logger } from 'pino'
puppeteer.use(StealthPlugin())


type LaunchOptions = Parameters<typeof puppeteer.launch>[0]

export class PuppeteerScrapper {
  public $page: Page | null
  private _browser: Browser | null
  protected payload: Array<any>
  private browser_option: LaunchOptions
  private close: boolean
  private logger: Logger

  constructor(close: boolean, browser_options?: LaunchOptions) {
    this.$page = null
    this._browser = null
    this.payload = []
    this.browser_option = browser_options
      ? browser_options
      : {
        headless: true,
      }
    this.close = close
    this.logger = logger
  }

  public async navigate(url: string): Promise<void> {
    if (this.$page !== null) {
      this.logger.info(`Page Navigating to ${url}`)
      await this.$page
        .goto(url, { timeout: 0, waitUntil: 'networkidle2' })
        .catch((err) => {
          throw err
        })
    }
  }
  private async _setup() {
    try {
      this.logger.info('Starting Browser ...')
      this._browser = await puppeteer.launch(this.browser_option)

      this.$page = await this._browser.newPage()
      if (this.$page) {
        await this.$page.setViewport({
          height: 1200,
          width: 1500,
        })
      }
      this.logger.info('Browser started successfully ...')
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error('Failed To Start Browser', { error })
        throw new Error()
      } else {
        throw new Error()
      }
    }
  }

  public async _cleanup() {
    this.logger.info('Clean up process started ...')
    if (this.$page && this._browser) {
      await this.$page.close()
      this.$page = null
      await this._browser.close()
      this._browser = null
    }
  }

  public async exists(selector: string): Promise<boolean> {
    return await this.$page!.waitForSelector(selector, { timeout: 1000 })
      .then(() => {
        this.logger.info('Selector Exists ...')
        return true
      })
      .catch((err) => {
        this.logger.info('Selector does not exist ...')
        return false
      })
  }
  async restart() {
    this.logger.info('Restarting The puppeteer session ...')
    await this._cleanup()
    await this._setup()
  }
  protected async $extract() { }

  async exec() {
    await this._setup()
    await this.$extract()
    this.close
      ? await this._cleanup()
      : this.logger.info('Browser needs to be manually closed ')
    return this.payload
  }
}
