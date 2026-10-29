import{test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, firefox, chromium } from '@playwright/test'

test('locator1 test',async()=>{
    const browser:Browser = await chromium.launch ({headless:false , channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

    //1.ID Attribute 
    const firstName = page.locator('id=input-firstname');
    const lasstName = page.locator('id=input-lastname');
    await firstName.fill("Jack")
    await lasstName.fill("trades")

    //2.ClassName 
    const logo: Locator = page.locator('.img-responsive')
    const logoExist =  await logo.isEnabled();
    console.log(logoExist);

    //3.text:
    const header: Locator = page.locator('text=Register Account')
    const headerExist = await header.isEnabled();
    console.log(headerExist);
    
    const continueBtn:Locator = page.locator('text=Continue')
    const continueBtnExist = await continueBtn.isEnabled();
    console.log(continueBtnExist);

    const ForgotPwdLink:Locator = page.locator('text=Forgotten Password');
    const ForgotPwdLinkExist = await ForgotPwdLink.isEnabled();
    console.log(ForgotPwdLinkExist);

    //4.CSS Selector 
    const emailId:Locator = page.locator('input#input-email');
    const telephone:Locator = page.locator('input[name = "telephone"]');
    const privacyChekbox = page.locator('input[type = "checkbox"] ');

    await emailId.fill("jacktrades@gmail.com");
    await telephone.fill("888888888")
    await privacyChekbox.click();

    //5.Xpath
    const password:Locator = page.locator('//input[@id="input-password"]');
    const searchbox:Locator = page.locator('//input[@name="search" and @type="text"]');
    
    await password.fill("test@123");
    await searchbox.fill("macbook");

    await page.waitForTimeout(5000); // 5 seconds

   // await new Promise(()=> {});
    
});

