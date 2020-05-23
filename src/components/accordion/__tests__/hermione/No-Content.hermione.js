describe('Accordion', function() {
    it('No-Content', function() {
        const selector = '.story-container';

        return this.browser
            .url('iframe.html?selectedKind=Accordion&selectedStory=No-Content')
            .assertView('No-Content', selector);
    });
});