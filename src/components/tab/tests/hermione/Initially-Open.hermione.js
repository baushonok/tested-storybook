describe('Tab', function() {
    it('Initially-Open', function() {
        const selector = '.story-container';

        return this.browser
            .url('iframe.html?selectedKind=Tab&selectedStory=Initially-Open')
            .assertView('Initially-Open', selector);
    });
});