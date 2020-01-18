const testTemplate = (component, story) =>
  `describe('${component}', function() {
    it('${story}', function() {
        const selector = '.story-container';

        return this.browser
            .url('iframe.html?selectedKind=${component}&selectedStory=${story}')
            .assertView('${story}', selector);
    });
});`;

module.exports = testTemplate;
