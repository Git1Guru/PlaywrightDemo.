import{test, expect, Browser, Page,Locator} from '@playwright/test'
import { webkit, firefox, chromium } from '@playwright/test'
 
test('rolelocator test', async()=>{

    const browser:Browser = await chromium.launch({  headless: false , channel: 'chrome'})
    const page:Page = await browser.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    await expect (page.getByRole('heading',{name: 'Register Account'})).toBeVisible();
    await expect(page.getByRole('link', {name:'Forgotten Password'})).toBeVisible();
    await expect(page.getByRole('radio',{name :'Yes'})).toBeVisible();
    await page.getByRole('radio',{name:'Yes'}).click();
    await page.getByRole('checkbox').click();
    await page.getByRole('button',{name:'Continue'}).click();
    await page.waitForTimeout(5000);

})