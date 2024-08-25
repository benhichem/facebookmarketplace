import { Page } from "puppeteer";
import { logger,Constants } from "../../lib";
export async function CheckIfLoggedIn(page: Page): Promise<boolean> {
  try {
    logger.info('Checking If Logged In ...');
    await page.goto('https://www.facebook.com/', { timeout: 0, waitUntil: "networkidle2" });
    
    const isLoggedIn = await page.waitForSelector(Constants.FacebookHeaderBarHomePage, { timeout: 30000 })
      .then(() => {
        logger.info('Facebook Account Logged In');
        return true;
      })
      .catch(() => {
        logger.info('Facebook Account Not Logged In');
        return false;
      });
    
    return isLoggedIn;
  } catch (error) {
    logger.error('Error checking login status:', error instanceof Error ? error.message : String(error));
    return false; // Assume not logged in if there's an error
   }
}
