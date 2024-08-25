import { GetBrowserLink, StartChromeInDebug, ConnectPuppeteer } from "./component";
import { Login } from "./component/scraper";
import { CheckIfLoggedIn } from "./component/scraper/check_login";
import { delay } from "./lib";
import { fillLocation } from "./component/scraper/fill_form";
import { CollectListing } from "./component/scraper/collect_data";
(async () => {
  try {
    StartChromeInDebug()
    await delay(5000)
    const WebsocketLink = await GetBrowserLink()
    console.log(WebsocketLink)
    const Browser = await ConnectPuppeteer(WebsocketLink)
    let page = await Browser.newPage()
    page.setViewport({ height: 900, width: 1600 })
    // const isLogged = await CheckIfLoggedIn(page)
    // console.log(isLogged)
    await page.goto('https://www.facebook.com/marketplace/?ref=app_tab', { waitUntil: "networkidle2", timeout: 0 })
    await fillLocation("cars for sale by owner", 'Miami, Florida', 0, page)
    await CollectListing(page)
  } catch (error) {
    console.log(error)
  }
})()



