/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    const formData = new FormData()
    const product = {};
    formData.set('data', new Blob([JSON.stringify(product)], {type: 'application/json'}));
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/from',
    }).then(({ body }) => {
      console.log(body) // -
    })
  })

  it.only('follows 302', () => {

    
		cy.intercept({
			method: 'GET',
			url: `http://localhost:3000/from`,
			times: 1,
		}).as('follow302');
    cy.visit('http://localhost:3000/index.html')
    cy.get('button').click()
		cy.wait('@follow302');
		cy.log('Finished waiting for xhr'); 
	});
})
