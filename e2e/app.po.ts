export class RidPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rid-app h1')).getText();
  }
}
