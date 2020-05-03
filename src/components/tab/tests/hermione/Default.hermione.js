describe('Tab', function() {
    it('Default', function() {
        const selector = '.story-container';

        return this.browser
            .url('iframe.html?selectedKind=Tab&selectedStory=Default')
            .assertView('Default', selector);
    });
});