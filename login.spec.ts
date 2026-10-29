import {test, expect, Browser, Page, Locator }from '@playwright/test'
import { chromium, firefox, webkit } from '@playwright/test'

test ('login test', async()=> {
    const browser:Browser = await chromium.launch ({channel:'chrome', headless: false})
    const page:Page =  await browser.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    
    const emailid:Locator = await page.locator('input#input-email')
    const password:Locator = await page.locator('input#input-password')
    const loginButton:Locator = await page.locator('input[value="Login"]')

        await emailid.fill("Okaytest@gmail.com");
        await password.fill("Okay@123");
        await loginButton.click();

        const title = await page.title();  //For Checking Page title 
        console.log("Homepage Title:", title); //For Printing HomePage title

        expect(title).toEqual('My Account') // For Checking expected result
 
        await page.screenshot({path:'homepage.png'})





})