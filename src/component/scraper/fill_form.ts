import { Page } from "puppeteer";
import { delay } from "../../lib";

//TODO: NOT DONE YET
export async function fillLocation(searchTerm: string, locationName: string, raduis: number, page: Page) {
  try {

    await page.click('#seo_filters > div > div:first-child > div > span')
    await page.waitForSelector("input[aria-label=Location]", { timeout: 3000 })
    await page.type("input[aria-label=Location]", locationName, { delay: 500 })
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await page.click('div[aria-label=Apply]')
    await delay(3000)
    await page.goto(`https://www.facebook.com/marketplace/search/?query=${searchTerm}`, { waitUntil: "networkidle2", timeout: 0 })
  } catch (error) {
    console.log(error)
  }

}

