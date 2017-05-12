import { GroupPage } from './app.po';

describe('group App', () => {
  let page: GroupPage;

  beforeEach(() => {
    page = new GroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
