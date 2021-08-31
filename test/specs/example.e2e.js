const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should open the browser at the correct page', async () => {
        await LoginPage.open();
    })

    // it('should demonstrate the use of sync mode (@wdio/sync)', () => {
    //     LoginPage.login('tomsmith', 'SuperSecretPassword!');
    //     expect(SecurePage.flashAlert).toBeExisting();
    //     expect(SecurePage.flashAlert).toHaveTextContaining(
    //         'You logged into a secure area!');
    //     SecurePage.btnSubmit.click()
    // });

    it('should demonstrate the use of standard await calls', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(await SecurePage.flashAlert).toBeExisting();
        expect(await SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        await( await SecurePage.btnSubmit).click();
    });

    it('should demonstrate the use of new chained await API - excluding expect calls', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await(SecurePage.btnSubmit).click();
    });

    it('should demonstrate the use of new chained await API', async () => {
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(await SecurePage.flashAlert).toBeExisting();
        await expect(await SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        await(SecurePage.btnSubmit).click();
    });
});
