import { Page } from "puppeteer";

export async function CollectListing(page: Page) {

  const ListingLinks: Array<string> = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img')).map((img) => {
      return img.closest('a[role=link]') ? (img.closest('a[role=link]') as HTMLAnchorElement).href : "null"
    })
    return images
  })
  for (let index = 0; index < ListingLinks.length; index++) {
    const link = ListingLinks[index];
    const data = await CollectProfile(page, link)
    console.log(data)
  }
}



async function CollectProfile(page: Page, url: string) {
  try {
    await page.goto(url, { timeout: 0, waitUntil: "networkidle2" })
    const info = await page.evaluate(() => {
      const title = document.querySelector('h1') ? document.querySelector('h1')?.innerText : "null"



      return { title }
    })
    console.log(info)
  } catch (error) {

  }

}
