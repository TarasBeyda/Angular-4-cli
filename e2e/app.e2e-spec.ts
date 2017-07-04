import { DatalivePage } from './app.po';

describe('datalive App', function() {
  let page: DatalivePage;

  beforeEach(() => {
    page = new DatalivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
