import {test, expect, Page, Browser } from "playwright/test";
import { webkit, firefox, chromium } from "playwright/test";

test ('chaininglocator test', async()=>{

    const browser:Browser = await chromium.launch({ channel: 'chrome', headless: false})
    const page:Page = await browser.newPage();

    await page.goto("https://orangehrm.com/30-day-free-trial") 
    await page.locator('Form#Form_getForm >> #Form_getForm_Name').fill("Jack")
    await page.locator('Form#Form_getForm >> #Form_getForm_action_submitForm').click();
    
    await page.waitForTimeout(5000);

})