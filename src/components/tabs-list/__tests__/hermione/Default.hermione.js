describe('TabsList', function () {
  it('Default', function () {
    const selector = '.story-container';

    return this.browser
      .url('iframe.html?selectedKind=TabsList&selectedStory=Default')
      .assertView('Default', selector);
  });
});
