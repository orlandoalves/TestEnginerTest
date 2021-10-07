import { homePage } from '../../support/pages/homePage';
import { resultsPage } from '../../support/pages/resultsPage';

context('Actions', () => {
    beforeEach(() => {
      cy.visit('/');

    })

  
    it('Front-end Tests 1', () => {

      cy.get(homePage.search).type('camiseta')
      cy.get(homePage.btnSearch).click()
      cy.get(resultsPage.results).should('have.text', '\n            0 results have been found.        ')
      

    })  
    
  })


  