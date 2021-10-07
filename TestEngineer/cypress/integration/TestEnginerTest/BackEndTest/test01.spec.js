
describe('Back-end Test', () => {

    it('should successfully return data of GET API', () => {
      cy.request({
        url: "https://fakerestapi.azurewebsites.net/api/v1/Activities",
        method: 'GET',
        headers: {
          "Accept": "application/json, */*",
          "Content-Type": "application/x-www-form-urlencoded"
        }

  
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        })
    })
  
  })
  