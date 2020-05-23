describe('Accordion', function () {
  it('Default', function () {
    const selector = '.story-container';

    return this.browser
      .url('iframe.html?selectedKind=Accordion&selectedStory=Default')
      .assertView('Default', selector);
  });
});
