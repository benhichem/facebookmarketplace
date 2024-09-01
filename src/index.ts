import { GetBrowserLink, StartChromeInDebug, ConnectPuppeteer } from "./component";
import { Login } from "./component/scraper";
import { delay, logger, getCurrentDateTimeFormatted } from "./lib";
import { fillLocation } from "./component/scraper/fill_form";
import { CollectListing } from "./component/scraper/collect_data";


import { WebSocketServer } from "ws"
import fs from "node:fs"
import * as child_process from "child_process"

type webSocketEvents = "Login to facebook" | "check login" | "search"

type event = {
  event: webSocketEvents,
  payload: unknown
}

const CLientURL = "http://localhost:5173/"
async function main() {
  try {
    child_process.exec("cd marketplaceclient && pnpm run dev")
    StartChromeInDebug()
    await delay(5000)
    const wsServer = new WebSocketServer({ port: 3002 })
    const BrowserLink = await GetBrowserLink()
    logger.info(`Browser Connection Url :: ${BrowserLink}`) 
    const browser = await ConnectPuppeteer(BrowserLink)
    const page = await browser.newPage()
    await page.setViewport({ height: 900, width: 1600 })
    await page.goto(CLientURL, { waitUntil: "networkidle2", timeout: 0 })
    await delay(2000)
    wsServer.on('connection', (ws) => {
      logger.info('Established Connection to Browser ...')
      ws.on('message', async (data) => {
        let message: event = JSON.parse(
          data.toString(),
        )
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
           
            let payload = message.payload as { search_term: string; location: string; radui: string }
            logger.info('Received an order Search')
            logger.info(`search_term : ${payload.search_term}, location : ${payload.location}`)
            const newPage2 = await browser.newPage()
            await newPage2.setViewport({
              height: 900, width: 1600
            })
            await newPage2.goto('https://www.facebook.com/marketplace/?ref=app_tab', { waitUntil: "networkidle2", timeout: 0 })
            //TODO: Still havent Done The Raduis
            await fillLocation(payload.search_term, payload.location, 0, newPage2)
            let payloadReturn = await CollectListing(newPage2)
            await newPage2.close()
            fs.writeFileSync(`./output/${getCurrentDateTimeFormatted()}.json`, JSON.stringify(payloadReturn))
            ws.send(`Finished Scraping ${payload.search_term} __ ./output/${getCurrentDateTimeFormatted()}.json`)
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
