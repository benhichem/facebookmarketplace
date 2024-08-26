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
const formSchema = z.object({
  search_term: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "location must follow city, state format eg: Miami, Florida"
  }),
  raduis: z.string().min(2, {
    message: "raduis must start from 80 miles"
  })
})
function App() {

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
  }

  return (
    <div className="w-dvw h-dvh flex items-center content-center flex-col pt-8 bg-cyan-50">
      <h1 className="scroll-m-20 p-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
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
