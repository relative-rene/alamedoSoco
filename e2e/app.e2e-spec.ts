import { NeptunesPage } from './app.po';

describe('neptunes App', () => {
  let page: NeptunesPage;

  beforeEach(() => {
    page = new NeptunesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
