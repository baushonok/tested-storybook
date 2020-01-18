const assert = require('chai').assert;

describe(Accordion, function() {
    it(Default, function() {
        return this.browser
            .url('https://github.com/gemini-testing/hermione')
            .getText('#readme h1:first-of-type')
            .then(function(title) {
                assert.equal(title, 'Hermione')
            });
    });
});