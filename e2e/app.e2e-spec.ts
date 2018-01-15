import { WishlistPage } from './app.po';

describe('wishlist App', function() {
  let page: WishlistPage;

  beforeEach(() => {
    page = new WishlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
