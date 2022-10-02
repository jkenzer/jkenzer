import puppeteer from "puppeteer";

const url = "https://trailblazer.me/id/jkenzer";
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({
  width: 1000,
  height: 800,
  deviceScaleFactor: 1,
});
await page.goto(url, {
  waitUntil: "networkidle2",
});
await page.screenshot({
  path: "profile-josh-kenzer.jpg",
  type: "jpeg",
  quality: 100,
  clip: {
    x: 545,
    y: 345,
    width: 412,
    height: 283,
  },
  omitBackground: true,
});

await browser.close();

console.log("done");
