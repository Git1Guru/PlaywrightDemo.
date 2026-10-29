import{test, expect, Browser, Page, Locator,FrameLocator} from '@playwright/test'
import { webkit,chromium,firefox } from '@playwright/test'



test('MultiplefileUpload test',async()=>{

    const browser:Browser = await chromium.launch({channel:'chrome', headless:false });
    const page:Page =  await browser.newPage();

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    //Multiple File Upload
    await page.locator("input[name='filesToUpload']").setInputFiles(['C:/Users/pc/Documents/File/Test.jpg',
        'C:/Users/pc/Documents/File/sample.pdf']);
        await page.waitForTimeout(5000);


});
