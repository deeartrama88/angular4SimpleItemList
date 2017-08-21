import { BuddhaSoftTestWorkPage } from './app.po';

describe('buddha-soft-test-work App', () => {
  let page: BuddhaSoftTestWorkPage;

  beforeEach(() => {
    page = new BuddhaSoftTestWorkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
