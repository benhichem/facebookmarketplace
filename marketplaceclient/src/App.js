"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("@hookform/resolvers/zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("zod");
const form_1 = require("@/components/ui/form");
const button_1 = require("./components/ui/button");
const input_1 = require("./components/ui/input");
const formSchema = zod_2.z.object({
    search_term: zod_2.z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    location: zod_2.z.string().min(2, {
        message: "location must follow city, state format eg: Miami, Florida"
    }),
    raduis: zod_2.z.string().min(2, {
        message: "raduis must start from 80 miles"
    })
});
function App() {
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: {
            search_term: "cars for sale by owner",
            location: "Miami, Florida",
            raduis: "80"
        },
    });
    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }
    return (<div className="w-dvw h-dvh flex items-center content-center flex-col pt-8 bg-cyan-50">
      <h1 className="scroll-m-20 p-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Facebook Marketplace Scraper
      </h1>
      <div className="w-2/3 pt-12">
        <form_1.Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <form_1.FormField control={form.control} name="search_term" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Search Term</form_1.FormLabel>
                  <form_1.FormControl>
                    <input_1.Input placeholder="" {...field}/>
                  </form_1.FormControl>
                  <form_1.FormDescription>
                    This is your search term
                  </form_1.FormDescription>
                  <form_1.FormMessage />
                </form_1.FormItem>)}/>
            <form_1.FormField control={form.control} name="location" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Location</form_1.FormLabel>
                  <form_1.FormControl>
                    <input_1.Input placeholder="" {...field}/>
                  </form_1.FormControl>
                  <form_1.FormDescription>
                   please input a location following syntax City, State example: Miami, Florida 
                  </form_1.FormDescription>
                  <form_1.FormMessage />
                </form_1.FormItem>)}/>
            <form_1.FormField control={form.control} name="raduis" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Raduis</form_1.FormLabel>
                  <form_1.FormControl>
                    <input_1.Input placeholder="" {...field}/>
                  </form_1.FormControl>
                  <form_1.FormDescription>
                   Raduis 
                  </form_1.FormDescription>
                  <form_1.FormMessage />
                </form_1.FormItem>)}/>

            <button_1.Button onSubmit={() => { onSubmit; }} type="submit">Submit</button_1.Button>
          </form>
        </form_1.Form>
      </div>
    </div>);
}
exports.default = App;
