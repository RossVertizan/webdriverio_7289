const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
    get btnSubmit () { return $('a[class=\'button secondary radius\']') }
}

module.exports = new SecurePage();
