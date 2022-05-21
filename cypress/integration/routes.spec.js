// routes.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('base test', () => {
  it('should alway pass', () => {
    expect(true).to.equal(true);
  });
});

describe('check routes', () => {
  describe('api', () => {
    it('/api', () => {
      cy.request({ url: 'http://localhost:5000/api/' }).then((resp) => {
        expect(resp.status).to.eq(200)
      });
    });

    it('/api/openapi.json', () => {
      cy.request({ url: 'http://localhost:5000/api/openapi.json' }).then((resp) => {
        expect(resp.status).to.eq(200)
      });
    });

    it('/api/explorer/', () => {
      cy.request({ url: 'http://localhost:5000/api/explorer/' }).then((resp) => {
        expect(resp.status).to.eq(200)
      });
    });

    it('/api/bad_route/', () => {
      cy.request({
        url: 'http://localhost:5000/api/bad_route/',
        failOnStatusCode: false
      }).then((resp) => {
        expect(resp.status).to.eq(404)
      });
    });
  });

  describe('/client', () => {
    it('/', () => {
      cy.request({ url: 'http://localhost:5000/api/' }).then((resp) => {
        expect(resp.status).to.eq(200)
      });
    });
  });

  it('/api/bad_route/', () => {
    cy.request({
      url: 'http://localhost:5000/bad_route/',
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(404)
    });
  });
});
