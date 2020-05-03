describe('Tab', function() {
    it('Several-Tabs', function() {
        const selector = '.story-container';

        return this.browser
            .url('iframe.html?selectedKind=Tab&selectedStory=Several-Tabs')
            .assertView('Several-Tabs', selector);
    });
});