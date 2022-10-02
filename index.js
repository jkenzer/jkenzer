import puppeteer from "puppeteer";
import sharp from "sharp";

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
await page.screenshot({ path: "profile.png" });

await browser.close();

sharp("profile.png")
  .extract({ left: 540, top: 340, width: 417, height: 288 })
  // .resize(250, 250)
  .toFile("profile-cropped.png", (err, info) => {
    if (err) {
      console.log(err);
    }
  });
console.log("done");
