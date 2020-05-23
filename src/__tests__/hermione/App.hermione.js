describe("App", function () {
  it("Default", function () {
    const selector = ".app";

    return this.browser.url("/").assertView("Default", selector);
  });
});
