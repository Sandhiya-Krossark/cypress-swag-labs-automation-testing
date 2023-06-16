export class ProductCheckoutFlowPage {



        pageElements = {
            pathName: 'pathname',
            userNameField: '[data-test="username"]',
            passworddField: '[data-test="password"]',
      
        }
    
        navigate() {
            cy.visit('/')
        }
        wait(){
            cy.wait(3000)
        }
        
  
}