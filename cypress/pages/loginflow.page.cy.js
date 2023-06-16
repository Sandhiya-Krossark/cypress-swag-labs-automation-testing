export class LoginPage {

    pageElements = {
        pathName: 'pathname',
        userNameField: '[data-test="username"]',
        passworddField: '[data-test="password"]',
        login_Btn: '[data-test="login-button"]',
        inputfieldValidation: '[data-test="error"]',
    }

    pathUrl() {
        return cy.location(this.pageElements.pathName)
    }
    
    enteruserName(username) {
        cy.get(this.pageElements.userNameField).type(username)
    }

    enterPassword(password) {
        cy.get(this.pageElements.passworddField).type(password)
    }


    clickLoginButton(){
        cy.get(this.pageElements.login_Btn).click()
    }

    inputfieldValidation(validation) {
        cy.get(this.pageElements.inputfieldValidation)
             .contains(validation).should('be.visible')
     }
}
