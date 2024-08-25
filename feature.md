User_stroy: 
user needs to scrape facebook Marketplace for car parts and output the results into a file with price, picture, seller profile, some other value. 

sollution i came up with: 

the sollution comes with two parts the first one is the client secion and the seccond is the backend 
the front end will have an input to put in your querry, and categories, and an area + price limit.  also a search button.
and then the request will go to our node js backend connected via websockets to make the search 


features: 
   [ ] Frontend 
        [ ] status header : 
            1. server connected.
            2. facebook account connected or connect an account. 
        [ ] form: 
            1. search query 
            2. categories 
            3. area to look in 
            4. price limit. 
            5. number of results.
   [ ] Backend: 
        [x] Setup:
            [DONE] 1. browser connection to browser debugger script.
                this needs to check what OS is executed and the run the appropreate command to start chrome browser. 
            [DONE] 2. get browser Port Number 
                this function will get the port number so puppeteer can connect to it , also will serve as a check if browser has started or not. 
            [DONE] 3. puppeteer setup with puppeteer-extra and plugins and also the session needs to connect with websockets.
        [ ] Scraping functions : 
            [DONE] 1. check if logged in.
            [DONE] 2. login manual script. 
                // page needs to close right after the loggin is succesfull.
            [] 3. GetCategories Function 
            [DONE]4. Fill in Form For Query Function 
            5. Collect Data
        [ ] CleanUpData:
            1. NOT YET 
            2. output data to file
        [ ] Tests: 
        - [ ] backendOnly
            1. Chrome browser initialization
            2. get Browser Port function 
            3. Puppeteer script
            4. check login 
            5. login manual 
            6. fill in form
            7. collect Data funciton 
            8. writeToFile 
    [ ] Scripts: 
            1. Start Browser 
            2. Start Server 
            3. Start CLient
