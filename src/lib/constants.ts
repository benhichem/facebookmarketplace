export const Constants = {
  FacebookMarketPlaceUrl: "https://www.facebook.com/marketplace/?ref=bookmark",
  FacebookMarketPlaceListingBoxes: "#mount_0_0_cj > div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div.x1xfsgkm.xqmdsaz.x1cnzs8.x4v5mdz.xjfs22q > div > div.x8gbvx8.x78zum5.x1q0g3np.x1a02dak.x1nhvcw1.x1rdy4ex.xcud41i.x4vbgl9.x139jcc6 > div",
  FacebookMarketPlaceListingBoxesXpath: '/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div/div[3]/div/div[1]/div/div/div/span/div/div/div/div[2]',
  BrowserCommands: {
    linux: 'google-chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=./profile1/',
    win: 'start chrome.exe --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=./profile1/',
    darwin: '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=./profile1/'
  },
  FacebookHeaderBarHomePage: "div[role=navigation]",
  FacebookListingDetail: {
    title: 'div:nth-child(1) > h1 > span',
    image:"div[role=main]",  // quyerSelectorAll('img[referrerpolicy="origin-when-cross-origin"]')
    seller: 'span > div > div > a > span',
    description: 'div.xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft.x1iyjqo2.xqtp20y.xx6bls6.xh8yej3.xiylbte > div.x78zum5.xdt5ytf.x1iyjqo2.x1n2onr6 > div:nth-child(5) > div.x1gslohp',
    description_text:'div.x1n2onr6.x1ja2u2z.x9f619.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xx6bls6.xjbqb8w > div > div:nth-child(2) > div > div > span',
    price:'div.xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft.x1iyjqo2.xqtp20y.xx6bls6.xh8yej3.xiylbte > div.x78zum5.xdt5ytf.x1iyjqo2.x1n2onr6 > div.xyamay9.x1pi30zi.x18d9i69.x1swvt13 > div.x1xmf6yo > div > span',
    video:"video"
  }
}
