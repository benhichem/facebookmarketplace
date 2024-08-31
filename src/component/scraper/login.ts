import { Page } from "puppeteer";
import { logger } from "../../lib";
/*
 * this function needs to go to the login Page
 */

export async function Login(page: Page): Promise<void> {
  try {
    logger.info('Navigating to Loging page')
    await page.goto('https://www.facebook.com', { waitUntil: "networkidle2", timeout: 0 })
    logger.info('Page Loaded Successfully waiting for it to be closed')
    return
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('Navigating frame was detached')) {
        // Handle the specific error here
        logger.warn('Page Closed prematurally ...')
      } else {
        throw error
      }
    }
  }
}
