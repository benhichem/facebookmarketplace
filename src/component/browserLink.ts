import axios from "axios";
import { BrowserUrlResponse } from "../types";


export async function GetBrowserLink(): Promise<string> {
  try {
    const request = await axios.get("http://localhost:9222/json/version")
    const data: BrowserUrlResponse = request.data
    if (data.webSocketDebuggerUrl === undefined) throw new Error('Could not establish connection with browser')
    return data.webSocketDebuggerUrl
  } catch (error) {
    throw new Error("Could not establish connection with browser ")
  }
}
