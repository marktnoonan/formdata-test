/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    const formData = new FormData()
    const product = {};
    formData.set('data', new Blob([JSON.stringify(product)], {type: 'application/json'}));
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/test/post',
      body: formData,
    }).then(({ body }) => {
      console.log(body) // -
    })
  })
})
