describe('Accordion', function () {
  it('With-remove-control', function () {
    const selector = '.story-container';

    return this.browser
      .url(
        'iframe.html?selectedKind=Accordion&selectedStory=With-remove-control'
      )
      .assertView('With-remove-control', selector);
  });
});
