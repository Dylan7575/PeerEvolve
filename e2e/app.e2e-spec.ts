import { PeerEvolvePage } from './app.po';

describe('peer-evolve App', function() {
  let page: PeerEvolvePage;

  beforeEach(() => {
    page = new PeerEvolvePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
