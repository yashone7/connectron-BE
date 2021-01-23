const app = require('../../src/app');

describe('\'bookmarks\' service', () => {
  it('registered the service', () => {
    const service = app.service('bookmarks');
    expect(service).toBeTruthy();
  });
});
