import { LoginPage } from "../../pages/loginflow.page.cy";
import { ProductCheckoutFlowPage } from "../../pages/productcheckoutflow.page.cy";

const loginPage = new LoginPage();
const productcheckoutflowPage = new ProductCheckoutFlowPage();

describe('Product Checkout Suite', () => {

  beforeEach(() =>{
        cy.visit('/')
        
        cy.fixture('testData').then(function(data) {
          this.data=data;
          loginPage.enteruserName(this.data.validUsername)
          loginPage.enterPassword(this.data.validPassword)
          loginPage.clickLoginButton()
          loginPage.pathUrl().should("equal", "/inventory.html")
         })
        })      

        it('Navigate to Product view & add to cart flow',function(){
          productcheckoutflowPage.clickInventoryItem()
          productcheckoutflowPage.clickAddtoCartButton()
          productcheckoutflowPage.addtocart_BadgeCount(this.data.count)
          productcheckoutflowPage.clickAddtoCartIcn()
          cy.get('.inventory_item_name').contains('Sauce Labs Bolt T-Shirt').should('be.visible')
        })

      it('Remove cart items & Continue the shopping',function(){
        productcheckoutflowPage.clickInventoryItem()
        productcheckoutflowPage.clickAddtoCartButton()
        productcheckoutflowPage.addtocart_BadgeCount(this.data.count)
        productcheckoutflowPage.clickAddtoCartIcn()
        productcheckoutflowPage.verifyProductName(this.data.verifyProductName)
        productcheckoutflowPage.clickremoveItemButton()
        productcheckoutflowPage.clickbacktoContinueButton()
        productcheckoutflowPage.clickAddtoCartIcn()
        productcheckoutflowPage.addtocart_BadgeCountEmpty()
      })

      it('Checkout the order',function(){
        productcheckoutflowPage.clickInventoryItem()
        productcheckoutflowPage.clickAddtoCartButton()
        productcheckoutflowPage.addtocart_BadgeCount(this.data.count)
        productcheckoutflowPage.clickAddtoCartIcn()
        productcheckoutflowPage.verifyProductName(this.data.verifyProductName)
        productcheckoutflowPage.clickCheckoutButton()
        productcheckoutflowPage.enterfirstName(this.data.firstName)
        productcheckoutflowPage.enterlastName(this.data.lastName)
        productcheckoutflowPage.enterpotalCode(this.data.postalCode)
        productcheckoutflowPage.clickConitnueButton()
        productcheckoutflowPage.clickFinishButton()
        productcheckoutflowPage.verifyAcknowledgement_Msg(this.data.OrderAcknowledgementMessage)
        productcheckoutflowPage.verifyOrederInfo_Msg(this.data.OrderInfo)        
      }) 
  })
