const LoginPage = require('../pageobjects/login.page');

describe('Save Screen in Sync mode', () => {
    it('should save the screen and remove the page footer', () => {
        LoginPage.open();
        browser.saveScreen('screenshot_sync', {
            removeElements: [LoginPage.pageFooter]
        })
    })
});
