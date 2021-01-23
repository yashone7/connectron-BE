const app = require('../../src/app');

describe('\'feeds\' service', () => {
  it('registered the service', () => {
    const service = app.service('feeds');
    expect(service).toBeTruthy();
  });
});
