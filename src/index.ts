import { GetBrowserLink, StartChromeInDebug, ConnectPuppeteer } from "./component";
import { Login } from "./component/scraper";
import { CheckIfLoggedIn } from "./component/scraper/check_login";
import { delay, logger, getCurrentDateTimeFormatted } from "./lib";
import { fillLocation } from "./component/scraper/fill_form";
import { CollectListing } from "./component/scraper/collect_data";



// (async () => {
//   try {
//     // Start Browser
//     // Host Vite APP 
//     //
//     StartChromeInDebug()
//     await delay(5000)
//     const WebsocketLink = await GetBrowserLink()
//     console.log(WebsocketLink)
//     const Browser = await ConnectPuppeteer(WebsocketLink)
//     let page = await Browser.newPage()
//     page.setViewport({ height: 900, width: 1600 })

//     // const isLogged = await CheckIfLoggedIn(page)
//     // console.log(isLogged)
//     await page.goto('https://www.facebook.com/marketplace/?ref=app_tab', { waitUntil: "networkidle2", timeout: 0 })
//     await fillLocation("cars for sale by owner", 'Miami, Florida', 0, page)
//     await CollectListing(page)


//   } catch (error) {
//     console.log(error)
//   }
// })()


import { WebSocketServer } from "ws"
import fs from "node:fs"

type webSocketEvents = "Login to facebook" | "check login" | "search"

type event = {
  event: webSocketEvents,
  payload: unknown
}

const CLientURL = "http://localhost:5173/"
async function main() {
  try {
    StartChromeInDebug()
    await delay(5000)
    const wsServer = new WebSocketServer({ port: 3002 })
    const BrowserLink = await GetBrowserLink()
    console.log(BrowserLink)
    const browser = await ConnectPuppeteer(BrowserLink)
    const page = await browser.newPage()
    await page.setViewport({ height: 900, width: 1600 })
    await page.goto(CLientURL, { waitUntil: "networkidle2", timeout: 0 })
    await delay(2000)
    wsServer.on('connection', (ws) => {
      console.log('First Web Socket Established')
      ws.on('message', async (data) => {
        let message: event = JSON.parse(
          data.toString(),
        )

        console.log(message)
        switch (message.event) {
          case "Login to facebook":
            // await new Script(browser.browser!, message.payload).extract()
            const newPage = await browser.newPage()
            await newPage.setViewport({ height: 900, width: 1600 })
            await Login(newPage)
            newPage.on('close', async () => {
              ws.send("1")
            })
            break;
          case "check login":
            let loggedin = JSON.parse(fs.readFileSync('consts.json').toString())
            console.log(loggedin)
            ws.send("true")
            break;
          case "search":
            console.log(message)
            let payload = message.payload as { search_term: string; location: string; radui: string }
            logger.info('Received an order Search')
            const newPage2 = await browser.newPage()
            await newPage2.setViewport({
              height: 900, width: 1600
            })
            await newPage2.goto('https://www.facebook.com/marketplace/?ref=app_tab', { waitUntil: "networkidle2", timeout: 0 })
            //TODO: Still havent Done The Raduis
            await fillLocation(payload.search_term, payload.location, 0, newPage2)
            let payloadReturn = await CollectListing(newPage2, ws)
            await newPage2.close()
            fs.writeFileSync(`./output/${getCurrentDateTimeFormatted()}.json`, JSON.stringify(payloadReturn))
            ws.send(`Finished Scraping ${payload.search_term}`)
            break;
          default:
            ws.send('1')
            break;
        }
      })
    })
  } catch (error) {
    console.log(error)
  }
}

process.on('uncaughtException', (err) => {
  console.log('Grabbed an uncaught exception.')
  console.log(err)
})

process.on('unhandledRejection', (err) => {
  console.log('Grabbed an unhandled rejection.')
  console.log(err)
})


main()
