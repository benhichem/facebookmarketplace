import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table"

import useWebSocket, { ReadyState } from "react-use-websocket"
const SocketUIrl = "ws://localhost:3002"
function TablePage() {
  const [item] = useState<Array<any>>([])
  const { lastMessage, readyState } = useWebSocket(SocketUIrl)


  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage.data)
      // if(lastMessage.data.includes('url')){
      //   let itemJson = JSON.parse(lastMessage.data)
      //   console.log(itemJson)
      //   item.push(itemJson)
      // }
    }
  }, [lastMessage, connectionStatus])

  console.log("WebSocket Server is Currently ", connectionStatus)
  return (
    <div className="w-dvw h-dvh bg-cyan-50 p-8">
      <Table>
        <TableCaption>Hello wolrd</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead /* className="text-right" */>Amount</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* <TableRow> */}
          {/*   <TableCell className="font-medium">INV001</TableCell> */}
          {/*   <TableCell>Paid</TableCell> */}
          {/*   <TableCell>Credit Card</TableCell> */}
          {/*   <TableCell className="text-right">$250.00</TableCell> */}
          {/* </TableRow> */}
          {
            item.map((item) => {
              console.log(item)
              return (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>ITEM COUNT</TableCell>
            <TableCell className="text-right">{item.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}


export default TablePage
