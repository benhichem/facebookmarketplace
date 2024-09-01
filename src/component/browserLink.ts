import axios from "axios";
import { BrowserUrlResponse } from "../types";


export async function GetBrowserLink(): Promise<string | null> {
  try {
    const request = await axios.get("http://localhost:9222/json/version")
    const data: BrowserUrlResponse = request.data
    if (data.webSocketDebuggerUrl === undefined) throw new Error('Could not establish connection with browser')
    return data.webSocketDebuggerUrl
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      if (error.message.includes('connect ECONNREFUSED 127.0.0.1:9222')) {
        return null
      }
      return null
    }
    return null

  }
}
