const assert = require('chai').assert;

describe('App', function () {
  it('Default', function () {
    const selector = '.app';

    return this.browser.url('/').assertView('Default', selector);
  });

  it('Feedback', function () {
    const selector = "[data-testid='button']";

    return this.browser
      .url('/')
      .assertView('Default', selector)
      .click(selector)
      .assertView('Focused', selector)
      .click('.app')
      .assertView('Disabled', selector);
  });
});
