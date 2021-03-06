import { AngularUtilityPage } from './app.po';

describe('angular-utility App', () => {
  let page: AngularUtilityPage;

  beforeEach(() => {
    page = new AngularUtilityPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
