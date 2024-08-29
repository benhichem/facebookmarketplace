import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"

import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useEffect, useState } from "react"

const formSchema = z.object({
  search_term: z.string().min(2, {
    message: "Search query must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "location must follow city, state format eg: Miami, Florida"
  }),
  raduis: z.string().min(2, {
    message: "raduis must start from 80 miles"
  })
})

const SocketUrl = "ws://localhost:3002"
function App() {
  // const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.org');

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(SocketUrl);
  const [messageHistory, setMessageHistory] = useState<MessageEvent<any>[]>([]);
  const [disabledButton, setDisableButton] = useState<boolean>(true)
  const [loggedIn, setLoggedIn] = useState<boolean>(true)

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];
  useEffect(() => {
    sendJsonMessage('check login')
    if (lastMessage !== null) {
      if (lastMessage.data === "true") {
        setLoggedIn(false)
      }
    }
  }, [lastMessage])
  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage)
      setMessageHistory((prev) => prev.concat(lastMessage));
      console.log(messageHistory)
    }
    if (connectionStatus === "Open") setDisableButton(false)
  }, [lastMessage, connectionStatus]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search_term: "cars for sale by owner",
      location: "Miami, Florida",
      raduis: "80"
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    sendJsonMessage<{ event: string, payload: [] }>({ event: "search", payload: [] })
  }
  function onSubmitLogin() {
    sendJsonMessage<{ event: string, payload: [] }>({ event: "Login to facebook", payload: [] }, false)
  }

  return (
    <div className="w-dvw h-dvh flex items-center content-center flex-col pt-8 bg-cyan-50">
      <div className="flex flex-col absolute left-0 p-4">
        <span>The Scraper Server is currently {connectionStatus}</span>
        {loggedIn ?
          (<Button
            disabled={disabledButton}
            onClick={() => { onSubmitLogin() }}
            className="bg-blue-500 hover:bg-blue-700 w-1/1 mt-4">
            Login To Facebook
          </Button>)
          : ("")}
      </div>

      <h1 className="scroll-m-20 p-4 mt-16 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Facebook Marketplace Scraper
      </h1>
      <div className="w-2/3 pt-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="search_term"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Search Term</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your search term
                  </FormDescription>
                  <FormMessage />
                </FormItem>

              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    please input a location following syntax City, State example: Miami, Florida
                  </FormDescription>
                  <FormMessage />
                </FormItem>

              )}
            />
            <FormField
              control={form.control}
              name="raduis"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Raduis</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>
                    Raduis
                  </FormDescription>
                  <FormMessage />
                </FormItem>

              )}
            />

            <Button onSubmit={() => { onSubmit }} type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default App
