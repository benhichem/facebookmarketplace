# Facebookmarketplace

A Facebook Marketplace scraper designed to automate the extraction of product listings, including details such as titles, prices, descriptions, seller information, and images. This tool is ideal for market research, price comparison, or keeping track of product availability and trends

## Table of Contents
- [Facebookmarketplace](#param-githubrepo--replace------titlecase)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Author](#author)

## Installation
please make sure you have node v20 or above installed on your system 
if not follow the instruction bellow : https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac

run this command inside the folder terminal 
```
npm install
```
## Usage


```
npm run start

```
When the script starts, it will automatically open a browser and navigate to the Facebook Marketplace webpage.
**Important**: You must refresh the page to ensure it connects properly to the server.
You will need to log in to your Facebook account (this step is required only once). After logging in, by clicking the login to facebook button and closing that window.
fill out the form and simply press 'Submit' to start the scraping process.

![browserprocess](./public/New_Bitmap_Image.png)

output expected example : 
```
{
  {
    "Title": "2013 Toyota corolla L Sedan 4D",
    "images": [
      "https://scontent.fqfd1-1.fna.fbcdn.net/v/t45.5328-4/448587360_473262821971664_5802232905148645816_n.jpg?stp=dst-jpg_p720x720&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHqcL8l8_AcP4lxQ_ym1l_p6tR4wmkD7yfq1HjCaQPvJ5UTgz6j4Le0jSNUKxO7Q-T4V5d9Y4Z_DM6K34qFZfdd&_nc_ohc=YTADoJmwkqQQ7kNvgFNs1ZW&_nc_ht=scontent.fqfd1-1.fna&oh=00_AYB6sqo1PBqRcA-cKbI72o9dV6yI4AjsE5tfkMTdrVx1_w&oe=66DA1CA4",
      "https://scontent.fqfd1-1.fna.fbcdn.net/v/t45.5328-4/448587360_473262821971664_5802232905148645816_n.jpg?stp=dst-jpg_p720x720&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHqcL8l8_AcP4lxQ_ym1l_p6tR4wmkD7yfq1HjCaQPvJ5UTgz6j4Le0jSNUKxO7Q-T4V5d9Y4Z_DM6K34qFZfdd&_nc_ohc=YTADoJmwkqQQ7kNvgFNs1ZW&_nc_ht=scontent.fqfd1-1.fna&oh=00_AYB6sqo1PBqRcA-cKbI72o9dV6yI4AjsE5tfkMTdrVx1_w&oe=66DA1CA4",
      "https://scontent.fqfd1-1.fna.fbcdn.net/v/t45.5328-4/448587360_473262821971664_5802232905148645816_n.jpg?stp=dst-jpg_p720x720&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHqcL8l8_AcP4lxQ_ym1l_p6tR4wmkD7yfq1HjCaQPvJ5UTgz6j4Le0jSNUKxO7Q-T4V5d9Y4Z_DM6K34qFZfdd&_nc_ohc=YTADoJmwkqQQ7kNvgFNs1ZW&_nc_ht=scontent.fqfd1-1.fna&oh=00_AYB6sqo1PBqRcA-cKbI72o9dV6yI4AjsE5tfkMTdrVx1_w&oe=66DA1CA4",
      "https://scontent.fqfd1-1.fna.fbcdn.net/v/t45.5328-4/449281728_842756471112031_8056448714926663944_n.jpg?stp=dst-jpg_p720x720&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeG5UCDFf-URD4vaxVYgOv-0Lk__F-taD3UuT_8X61oPdRg0PQxbzkruGuITS0ObcOEofSKKK4J_s83TwYk58K55&_nc_ohc=CQ2EEUnh8jAQ7kNvgEFO9M0&_nc_ht=scontent.fqfd1-1.fna&oh=00_AYCw63QRWtxjfNDT-KWrXXE6FUlQiVHgNhxcMgAIGKnWEw&oe=66DA0206",
      "https://scontent.fqfd1-1.fna.fbcdn.net/v/t45.5328-4/449370518_7711190588917824_5307512516125818516_n.jpg?stp=dst-jpg_p720x720&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeGF_Ry2bdAGqwuYIkl0_xb-xBWil8gOC7TEFaKXyA4LtKKUbPchfEDvphs2VH4V8bAx_M6m5GhkUC_ILV-UUuMD&_nc_ohc=nDpA72VQ6PsQ7kNvgGorUyW&_nc_ht=scontent.fqfd1-1.fna&oh=00_AYD8eLllgidPm1Ua_lcjROT9azh1_-viJKIQXxOSmuVBlw&oe=66D9F329",
      "https://scontent.fqfd1-1.fna.fbcdn.net/v/t45.5328-4/445383010_738135538320435_4939001191863064531_n.jpg?stp=dst-jpg_p720x720&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeH3TDHU4EqhHEBQIgcx_mVORPy99KYfh2NE_L30ph-HY_jA4Zus-V2aPg_7DIzUv0nPDfccX02njKMYhAL7mzgM&_nc_ohc=0yboHTXb4YIQ7kNvgHi_DbA&_nc_ht=scontent.fqfd1-1.fna&oh=00_AYDWA0ChuqqsZ5RHGYq4nksHy6AHXnRzrLapyV_WKsPo6Q&oe=66DA1BF6",
      "https://scontent.fqfd1-1.fna.fbcdn.net/v/t45.5328-4/449246367_836204548401024_422727442026427683_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeFWKuau7IEvfXGvD5N_QWbTRgDRSbzLU7JGANFJvMtTslajLXQD7VgKoke-aDTOb8_p0Qw0ZAbyDLNbJzUsBkwa&_nc_ohc=4ulKoE39qq0Q7kNvgEJmOZh&_nc_ht=scontent.fqfd1-1.fna&oh=00_AYBSNOT_jLNPcncp1r17kquxaIMnsAWQDCv7tpgSa7Kucw&oe=66DA0E03",
      "https://scontent.fqfd1-2.fna.fbcdn.net/v/t45.5328-4/448795433_7759998374089131_1994792162622829233_n.jpg?stp=dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHWfiKONvP6m9YLwoo0IFsSeMxB1bCs3Ml4zEHVsKzcyXOmfXn97wBMBVVdXaB-Uas4djGTWJAeSnhV2cVgJ0vb&_nc_ohc=WtRQP_vhelYQ7kNvgGeMCCn&_nc_ht=scontent.fqfd1-2.fna&oh=00_AYCXGPIamlEv17QKu0cNeyF-El-nOlL-JLNBzu24WxSnrQ&oe=66DA0192",
      "https://scontent.fqfd1-2.fna.fbcdn.net/v/t45.5328-4/449257352_974597637483801_6521646918856366839_n.jpg?stp=dst-jpg_p720x720&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeE1bmqFzSrxMU-DNxQZcsey0DuVOa0Kgd7QO5U5rQqB3oejiOS3lbQXSFLRvtqQWRC5huHqRqA_scobEhA8RQtG&_nc_ohc=oBRH-UcuDUUQ7kNvgEEBqGR&_nc_ht=scontent.fqfd1-2.fna&oh=00_AYDsWyYIgIKZYUZjGAJkDiTPXl6QJNpluXYxDVZ6bX5XyQ&oe=66D9F078",
      "https://scontent.fqfd1-1.fna.fbcdn.net/v/t15.5256-10/456078497_1044156043770542_7120423193314103629_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=7965db&_nc_eui2=AeGCXjjeLghjloePooqnZbKBfyypBIVYRd5_LKkEhVhF3vqXXRuIgNhx68oVv4sXg-yWWv-jXyOZjx2zkdPqxQwt&_nc_ohc=ixL1Y5hP_L0Q7kNvgGVRxUK&_nc_ht=scontent.fqfd1-1.fna&oh=00_AYDm1-OTuup6zcr1aQ07hplcMudaxzB4GqV8mdCaSLWaSA&oe=66D9F298",
      "https://www.facebook.com/images/video/play_48dp.png"
    ],
    "SellerInfo": "Cristian Córdoba",
    "desc": [
      "Driven 110,000 miles",
      "Automatic transmission",
      "Exterior colour: Grey · Interior colour: Grey",
      "4/5 overall NHTSA safety rating",
      "4/5 front safety rating4/5 rollover safety rating5/5 side safety rating5/5 side barrier safety ratingNHTSA ratings ",
      "Fuel type: Petrol",
      "26.0 MPG city · 34.0 MPG motorway · 29.0 MPG combined",
      "2 owners"
    ],
    "price": "$1,000",
    "video": "blob:https://www.facebook.com/ab867a24-4b9c-44ae-9fef-f6d9e7962cd8"
  },
}
```


## License
This project is licensed under the [MIT License](./LICENSE).

## Author
benhichem<<hichemben45@gmail.com>>
