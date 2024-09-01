import { Page } from "puppeteer";
import { type WebSocket } from "ws";

export async function CollectListing(page: Page, ws: WebSocket) {

  const ListingLinks: Array<string> = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img')).map((img) => {
      return img.closest('a[role=link]') ? (img.closest('a[role=link]') as HTMLAnchorElement).href : "null"
    })

    return images.filter((item) => item.includes('https://www.facebook.com/marketplace/item/'))
  })
  console.log(ListingLinks)
  let payload: Array<unknown> = []
  for (let index = 0; index < 2; /*ListingLinks.length;*/ index++) {
    console.log(ListingLinks[index])
    const link = ListingLinks[index];
    const data = await CollectProfile(page, link)
    let text = JSON.stringify(data)
    ws.send(text, (err) => {
      if (err) console.log(err)
      console.log("Message Sent ")
    })
    console.log(data)
    payload.push(data)
  }
  return payload
}


import { Constants } from "../../lib";
async function CollectProfile(page: Page, url: string) {
  try {
    let desc: Array<string> | String = ""
    let images: Array<string> = []
    await page.goto(url, { timeout: 0, waitUntil: "networkidle2" })
    const info = await page.evaluate((descText: string, tilte: string, img: string, sellerinfo: string, description: string, prix: string) => {
      const Title = document.querySelector(tilte) ? (document.querySelector(tilte) as HTMLSpanElement).innerText : "null"
      const Img = document.querySelector(img) ? document.querySelector(img) : "null"
      if (Img !== "null") {
        let thething = Img?.querySelector("div[style='display:inline']")
        if (thething) {
          images = Array.from(thething.querySelectorAll('img[referrerpolicy="origin-when-cross-origin"]')).map((item) => {
            return (item as HTMLImageElement).src
          })
        }
      } else {
        images = []
      }
      const SellerInfo = document.querySelector(sellerinfo) ? (document.querySelector(sellerinfo) as HTMLSpanElement).innerText : "null"
      let descx = document.querySelector(description) ? Array.from(document.querySelector(description)!.children).map((item) => { return (item as HTMLElement).innerText }) : "null"
      if (descx === "null") {
        // checking for string description 
        desc = document.querySelector(descText) ? (document.querySelector(descText) as HTMLElement).innerText : ""
      } else {
        desc = descx
      }
      const price = document.querySelector(prix) ? (document.querySelector(prix) as HTMLElement).innerText : null
      const video = document.querySelector('video') ? (document.querySelector('video') as HTMLVideoElement).src : null
      return { Title, images, SellerInfo, desc, price, video }
    }, Constants.FacebookListingDetail.description_text,
      Constants.FacebookListingDetail.title,
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
