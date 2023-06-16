export class ProductCheckoutFlowPage {
        pageElements = {
            pathName:               'pathname',
            userNameField:          '[data-test="username"]',
            passworddField:         '[data-test="password"]',            
            inventoryItem:          '#item_1_title_link > .inventory_item_name',
            addtocart_Btn:          '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
            addtocart_badgeCount:   '.shopping_cart_badge',
            addtocart_Icn:          '.shopping_cart_link',
            removeItem_Btn:         '[data-test^="remove"]',
            bacttoContinue_Btn:     '[data-test="continue-shopping"]',
            clickCheckout_Btn:      '[data-test="checkout"]',
            firstNameField:         '[data-test="firstName"]',
            lastNameField:          '[data-test="lastName"]',
            postalCodeField:        '[data-test="postalCode"]',
            continue_Btn:           '[data-test="continue"]',
            finish_Btn:             '[data-test="finish"]',
            acknowledgement_Msg:    '.complete-header',
            orderinfo_msg:          '.complete-text',
            backtoProduct_Btn:      '[data-test="back-to-products"]',
            productName:            '.inventory_item_name'
        }
        
        pathUrl() {
            return cy.location(this.pageElements.pathName)
        } 

        clickInventoryItem(){
            cy.get(this.pageElements.inventoryItem).click()
        }

        clickAddtoCartButton(){
            cy.get(this.pageElements.addtocart_Btn).click()
        }
       
        clickAddtoCartIcn(){
        cy.get(this.pageElements.addtocart_Icn).click()
        }

        addtocart_BadgeCount(count){
            cy.get(this.pageElements.addtocart_badgeCount).contains(count).should('be.visible')
        }

        clickremoveItemButton(){
            cy.get(this.pageElements.removeItem_Btn).click()
        }

        clickbacktoContinueButton(){
            cy.get(this.pageElements.bacttoContinue_Btn).click()
        }

        clickCheckoutButton(){
            cy.get(this.pageElements.clickCheckout_Btn).click()
        }

        enterfirstName(firstName) {
            cy.get(this.pageElements.firstNameField).type(firstName)
        }
    
        enterlastName(lastName) {
            cy.get(this.pageElements.lastNameField).type(lastName)
        }

        enterpotalCode(postalCode) {
            cy.get(this.pageElements.postalCodeField).type(postalCode)
        }

        clickConitnueButton(){
            cy.get(this.pageElements.continue_Btn).click()
        }

        clickFinishButton(){
            cy.get(this.pageElements.finish_Btn).click()
        }

        verifyAcknowledgement_Msg(message){
            cy.get(this.pageElements.acknowledgement_Msg).should('contain.text', message)
        }
       
        verifyOrederInfo_Msg(message){
            cy.get(this.pageElements.orderinfo_msg).should('contain.text', message)
        }
  
        clickBackToProductButton(){
            cy.get(this.pageElements.backtoProduct_Btn).click()
        }

        addtocart_BadgeCountEmpty(){
            cy.get(this.pageElements.addtocart_badgeCount).should('not.exist')
        }

        verifyProductName(productName){
            cy.get(this.pageElements.productName).should('contain.text', productName)
        }    
}