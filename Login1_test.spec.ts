import{test} from '@playwright/test'
import { LoginPage1 } from '../pages/loginpage1';


test ('Login1_test', async({page})=> {

    const loginpage1 = new LoginPage1 (page);
    await loginpage1.gotoLoginPage();
     await loginpage1.login('standard_user','secret_sauce')
     await loginpage1.verifyLoginSuccess();
     await page.waitForTimeout(5000);


});