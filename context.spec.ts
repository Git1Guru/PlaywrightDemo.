import{ test,expect,Browser,Page,Locator, BrowserContext} from "playwright/test";
import { chromium,firefox,webkit } from "playwright/test";

test('context test', async()=>{

const browser:Browser = await chromium.launch ({headless:false, channel:'chrome'});

//Browser_Context1 
const browserContext_1:BrowserContext = await browser.newContext();
const page1:Page = await browserContext_1.newPage();

await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    
    const emailid1:Locator =  page1.locator('input#input-email')
    const password1:Locator =  page1.locator('input#input-password')
    const loginButton1:Locator = page1.locator('input[value="Login"]')

        await emailid1.fill("Okaytest@gmail.com");
        await password1.fill("Okay@123");
        await loginButton1.click();
    
        //Browser_Context2
        const browserContext_2:BrowserContext = await browser.newContext();
        const page2:Page = await browserContext_2.newPage();
        await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
        
    const emailid2:Locator =  page2.locator('input#input-email')
    const password2:Locator =  page2.locator('input#input-password')
    const loginButton2:Locator = page2.locator('input[value="Login"]')

        await emailid2.fill("Okaytest2@gmail.com");
        await password2.fill("Okay@123");
        await loginButton2.click();

    //await browerContext_1.close();
    //await browerContext_2.close();
    browser.close();

});