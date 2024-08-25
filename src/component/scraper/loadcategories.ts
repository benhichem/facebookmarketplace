import { Page } from "puppeteer";
import { logger } from "../../lib";
export async function GetCategories(page: Page): Promise<Array<string>> {
  try {
    await page.goto('https://www.facebook.com/marketplace', { waitUntil: "networkidle2", timeout: 0 })
    const categories = await page.evaluate(() => {

    })
    return []
  } catch (error) {
    logger.error('Failed to load Categories')
    logger.error(error)
    return []
  }
}
