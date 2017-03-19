import { Ng2ContentchildPage } from './app.po';

describe('ng2-contentchild App', () => {
  let page: Ng2ContentchildPage;

  beforeEach(() => {
    page = new Ng2ContentchildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
