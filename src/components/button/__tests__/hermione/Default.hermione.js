describe('Button', function() {
    it('Default', function() {
        const selector = '.story-container';

        return this.browser
            .url('iframe.html?selectedKind=Button&selectedStory=Default')
            .assertView('Default', selector);
    });
});