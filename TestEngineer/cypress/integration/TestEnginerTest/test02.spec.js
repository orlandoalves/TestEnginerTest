import { homePage } from '../../support/pages/homePage';
import { resultsPage } from '../../support/pages/resultsPage';

context('Actions', () => {
    beforeEach(() => {
      cy.visit('/');
 
    })

  
    it('Front-end Tests 2', () => {

      cy.get(homePage.search).type('blouse')
      cy.get(homePage.btnSearch).click()
      cy.get(resultsPage.inStock).should('have.text', '\n\t\t\t\t\t\t\t\t\t\tIn stock\t\t\t\t\t\t\t\t\t')
     

    })
  
    
  })