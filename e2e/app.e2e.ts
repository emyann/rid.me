import { RidPage } from './app.po';

describe('rid App', function() {
  let page: RidPage;

  beforeEach(() => {
    page = new RidPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rid works!');
  });
});
