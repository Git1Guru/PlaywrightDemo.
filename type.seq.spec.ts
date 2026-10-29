import{test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'

test('type seq test',async()=>{

    const browser:Browser = await chromium.launch({channel:'chrome', headless:false });
    const page:Page =  await browser.newPage();

    await page.goto("https://www.flipkart.com/")
    await page.getByPlaceholder('Search for Products, Brands and More').pressSequentially("mackbook",{delay:500});
})