import { logger } from "../lib"
import { Constants } from "../lib"
import * as child_process from "child_process"

export function StartChromeInDebug() {
  logger.info('Starting Browser ...')
  logger.info('identifying OS platform')
  let osCommand: string
  let platform = process.platform
  switch (platform) {
    case "win32":
      logger.info(`Platform Os : ${platform}`)
      osCommand = Constants.BrowserCommands.win
      break;
    case "linux":
      logger.info(`Platform Os : ${platform}`)
      osCommand = Constants.BrowserCommands.linux
      break;
    case "darwin":
      logger.info(`Platform Os : ${platform}`)
      osCommand = Constants.BrowserCommands.darwin
      break;
    default:
      throw new Error('Unsuported Operating System')
  }
  child_process.exec(osCommand)
}
