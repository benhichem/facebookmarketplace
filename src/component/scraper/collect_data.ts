import { Page } from "puppeteer";

export async function CollectListing(page: Page) {

  const ListingLinks: Array<string> = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img')).map((img) => {
      return img.closest('a[role=link]') ? (img.closest('a[role=link]') as HTMLAnchorElement).href : "null"
    })

    return images.filter((item) => item.includes('https://www.facebook.com/marketplace/item/'))
  })
  console.log(ListingLinks)
  for (let index = 0; index < 2; /*ListingLinks.length;*/ index++) {
    console.log(ListingLinks[index])
    const link = ListingLinks[index];
    const data = await CollectProfile(page, link)
    console.log(data)
  }
}


import { Constants } from "../../lib";
async function CollectProfile(page: Page, url: string) {
  try {
    await page.goto(url, { timeout: 0, waitUntil: "networkidle2" })
    const info = await page.evaluate((tilte: string, img: string, sellerinfo: string, description: string, prix: string) => {
      const Title = document.querySelector(tilte) ? (document.querySelector(tilte) as HTMLSpanElement).innerText : "null"
      const Img = document.querySelector(img) ? (document.querySelector(img) as HTMLImageElement).src : "null"
      const SellerInfo = document.querySelector(sellerinfo) ? (document.querySelector(sellerinfo) as HTMLSpanElement).innerText : "null"
      const desc = document.querySelector(description) ? Array.from(document.querySelector(description)!.children).map((item) => { return (item as HTMLElement).innerText }) : "null"
      const price = document.querySelector(prix) ? (document.querySelector(prix) as HTMLElement).innerText : null

      return { Title, Img, SellerInfo, desc, price }
    }, Constants.FacebookListingDetail.title,
      Constants.FacebookListingDetail.image,
      Constants.FacebookListingDetail.seller,
      Constants.FacebookListingDetail.description,
      Constants.FacebookListingDetail.price
    )
    return info
  } catch (error) {
    console.log(error)
  }

}
