import { JasmineTestPage } from './app.po';

describe('jasmine-test App', () => {
  let page: JasmineTestPage;

  beforeEach(() => {
    page = new JasmineTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
