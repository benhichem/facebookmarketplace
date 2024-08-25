// this will be a function that will start a puppeteer connection with   websocket
// this also needs to return the page and browser  
// is this good ? 
//
//

import puppeteer from "puppeteer-extra"
import stealthPlugin from "puppeteer-extra-plugin-stealth"
import {  Browser } from "puppeteer"

// : Promise<{ Page: Page; Browser: Browser }>
export async function ConnectPuppeteer(WebSocketUrl: string):Promise<Browser> {
  puppeteer.use(stealthPlugin())
  try {
    const browser = await puppeteer.connect({ browserWSEndpoint: `${WebSocketUrl}` })
    return browser
  } catch (error) {
    console.log(error)
    throw new Error('Failed To Connect To puppeteer To Browser')
  }
}


