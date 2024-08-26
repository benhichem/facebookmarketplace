User_stroy: 
user needs to scrape facebook Marketplace for car parts and output the results into a file with price, picture, seller profile, some other value. 

sollution i came up with: 

the sollution comes with two parts the first one is the client secion and the seccond is the backend 
the front end will have an input to put in your querry, and categories, and an area + price limit.  also a search button.
and then the request will go to our node js backend connected via websockets to make the search 


features: 
   [1/2] Frontend 
        [ ] status header : 
            1. server connected.
            2. facebook account connected or connect an account. 
        [DONE] form: 
            search query 
            categories 
            area to look in 
            number of results.
   [ ] Backend: 
        [DONE] Setup:
            [DONE] 1. browser connection to browser debugger script.
                this needs to check what OS is executed and the run the appropreate command to start chrome browser. 
            [DONE] 2. get browser Port Number 
                this function will get the port number so puppeteer can connect to it , also will serve as a check if browser has started or not. 
            [DONE] 3. puppeteer setup with puppeteer-extra and plugins and also the session needs to connect with websockets.
        [DONE] Scraping functions : 
            [DONE] 1. check if logged in.
            [DONE] 2. login manual script. 
                // page needs to close right after the loggin is succesfull.
            [DONE]4. Fill in Form For Query Function 
            [5/5] 5. Collect Data
                [DONE] image 
                [DONE] title 
                [DONE] description
                [DONE] price
                [DONE] seller detail
        [ ] CleanUpData:
            1. NOT YET 
            2. output data to file
        [ ] Tests: 
        - [5/8] backendOnly
            [DONE]1. Chrome browser initialization
            [DONE]2. get Browser Port function 
            [DONE]3. Puppeteer script
            [DONE]4. check login 
            [DONE]5. login manual 
            6. fill in form
            7. collect Data
            8. writeToFile 
    [0/3] Scripts: 
            1. Start Browser 
            2. Start Server 
            3. Start CLient
