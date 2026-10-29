import{test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('mouse test', async()=>{
    const browser:Browser =  await chromium.launch({channel:'chrome',headless:false})
    const Page:Page = await browser.newPage();

    await Page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    await Page.getByText('Double-Click Me To See Alert').dblclick(); //double click 
    

    //right click or context click 

    await Page.getByText('right click me').click({button: 'right'})

    //Shift + Click
    await Page.goto("https://the-internet.herokuapp.com/shifting_content")
    await Page.getByText('Example 1: Menu Element').click({modifiers:['Shift']});

    //mouse hover and then click
    await Page.goto("https://www.spicejet.com/");
    await Page.getByText('Add-ons').first().hover();
    await Page.getByText('Visa Services').first().click();



await Page.waitForTimeout(5000)
})