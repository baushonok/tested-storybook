describe('Accordion', function() {
    it('NoContent', function() {
        const selector = '.story-container';

        return this.browser
            .url('iframe.html?selectedKind=Accordion&selectedStory=NoContent')
            .assertView('NoContent', selector);
    });
});