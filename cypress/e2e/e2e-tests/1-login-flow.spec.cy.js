import { LoginPage } from "../../pages/loginflow.page.cy";
const tests = require ('../../fixtures/example.json');

const loginPage = new LoginPage();

describe('productcheckoutSuite ', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.fixture('example').then(function(data) {
            this.data = data;
        })        
    })

    it('Login with the valid username & password', function() {     
      loginPage.enteruserName(this.data.validUsername);
      loginPage.enterPassword(this.data.validPassword);
      loginPage.clickLoginButton();
      loginPage.pathUrl().should("equal", "/inventory.html");
    })

    it('Login with the invalid username & valid password', function() {
      loginPage.enteruserName(this.data.invalidUsername);
      loginPage.enterPassword(this.data.validPassword);
      loginPage.clickLoginButton();
      loginPage.inputfieldValidation(this.data.invalidLoginCredentials);
      loginPage.pathUrl().should("equal", "/");
    })

    it('Login with the valid username & invalid password', function() {
        loginPage.enteruserName(this.data.validUsername);
        loginPage.enterPassword(this.data.invalidPassword);
        loginPage.clickLoginButton();
        loginPage.inputfieldValidation(this.data.invalidLoginCredentials);
        loginPage.pathUrl().should("equal", "/");
    })

    it('Login with the invalid username & password', function() {
        loginPage.enteruserName(this.data.invalidUsername);
        loginPage.enterPassword(this.data.invalidPassword);
        loginPage.clickLoginButton();
        loginPage.inputfieldValidation(this.data.invalidLoginCredentials);
        loginPage.pathUrl().should("equal", "/");
    })
})