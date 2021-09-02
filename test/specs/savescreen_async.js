const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Save Screen in Sync mode', () => {
    it('should save the screen and remove the page footer', async () => {
        await LoginPage.open();
        await browser.saveScreen('screenshot_async', {
            removeElements: [LoginPage.pageFooter]
        })
    })
});
