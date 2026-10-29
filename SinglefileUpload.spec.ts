import{test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'

test('SinglefileUpload test',async()=>{

    const browser:Browser = await chromium.launch({channel:'chrome', headless:false });
    const page:Page =  await browser.newPage();

    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");


    //Single-Upload 
    await page.locator("input[name='upfile']").setInputFiles("C:/Users/pc/Documents/File/Test.jpg");

    await page.waitForTimeout(5000);
});