import { Page } from "puppeteer";

/*
 * this function needs to go to the login Page
 */

export async function Login(page: Page):Promise<void> {
  try {
    await page.goto('https://www.facebook.com', { waitUntil: "networkidle2", timeout: 0 })
  } catch (error) {
    console.log(error)
    throw new Error('Failed to navigate to login page')
  }


}
