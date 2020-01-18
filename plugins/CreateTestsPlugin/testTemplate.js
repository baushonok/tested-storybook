const testTemplate = (component, story) =>
  `const assert = require('chai').assert;

describe(${component}, function() {
    it(${story}, function() {
        return this.browser
            .url('https://github.com/gemini-testing/hermione')
            .getText('#readme h1:first-of-type')
            .then(function(title) {
                assert.equal(title, 'Hermione')
            });
    });
});`;

module.exports = testTemplate;
