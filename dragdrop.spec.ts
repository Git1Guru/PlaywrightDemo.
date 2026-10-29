import{test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('dragdrop test', async()=>{
    const browser:Browser =  await chromium.launch({channel:'chrome',headless:false})
    const Page:Page = await browser.newPage();

    await Page.goto("https://jqueryui.com/resources/demos/droppable/default.html")

    //Sigle command
    //await Page.locator('#draggable').dragTo(Page.locator('#droppable'))
    

    //Multiple Command
    await Page.locator('#draggable').hover();
    await Page.mouse.down();
     await Page.locator('#droppable').hover();
     await Page.mouse.up();
    await Page.waitForTimeout(5000);
});