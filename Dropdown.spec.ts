import{ test, expect, Browser, Page, Locator} from '@playwright/test'
import {webkit, firefox, chromium} from '@playwright/test'

test('Dropdown test', async()=>{

    const browser:Browser = await chromium.launch({channel:'chrome',headless: false})
    const page:Page = await browser.newPage();

    await page.goto("https://www.magupdate.co.uk/reader-enquiry/pati/271");
    const country_Dropdown = 'select#Contact_CountryCode'
    //await page.selectOption(country_Dropdown,{value:'AD'}); //For Value Selector 
    //await page.selectOption(country_Dropdown,{label:'Australia'}); // Selected based on text with label
    await page.selectOption(country_Dropdown,{index:1}) //based on index 

    //select#Contact_CountryCode > option  //Incase if you want to print all values 
    const all_option = await page.$$(country_Dropdown + '> option');
    console.log(all_option.length);

    for (const e of all_option){
        const text = await e.textContent();
        console.log(text);
    }

    await page.waitForTimeout(3000);
})