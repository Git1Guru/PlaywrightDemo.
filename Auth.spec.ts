import{ test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, firefox,chromium } from '@playwright/test'

test('Auth test', async() =>{
    const browser:Browser = await chromium.launch ({channel:'chrome',headless:false})
    const page:Page = await browser.newPage();

const username = 'admin';
const password = 'admin';
const authHeader = 'Basic ' + btoa(username+ ':'+password)
page.setExtraHTTPHeaders({Authorization : authHeader});

await page.goto("https://the-internet.herokuapp.com/basic_auth")
await page.waitForTimeout(3000);

})