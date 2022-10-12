import * as IframeElement from '../Elements/Iframe'

class IFrame {
    titleVerify() {
        //Checking the page titla equal to given title
        cy.title().should('eq', 'The Internet')
    }
    ValidatePageHeader() {
        //checking the header element visibleor not
        cy.get('h1').should("be.visible")
    }
    Checklength() {
        //Checking the element length
        cy.contains(IframeElement.ClickFrame).should('have.length', 1)
    }
    VisibleFrameBtn() {
        //validating FRame Button is there
        cy.contains(IframeElement.ClickFrame).should("be.visible")
    }
    ClickingFrame() {
        //Clicking the frame element
        cy.contains(IframeElement.ClickFrame).click()
        //cy.get(IframeElement.ClickFrame).click()
    }
    ValidateFrameBtnClicked() {
        // If Frame Button clicked it will direct this header
        cy.get('h3').should("be.visible")
    }
    ClickingIframe() {
        // Clicking the Iframe Element
        cy.contains(IframeElement.ClickIframe).click()
        // cy.get(IframeElement.ClickIframe).click()
    }
    ValidateIframeClicked() {
        // If Iframe Button clicked it will direct this header
        cy.get('h3').should("be.visible")
    }
    ClickingFrameBody() {
        // Finding the body and clear and type
        cy.get(IframeElement.Clickframebody).then(function ($iframe) {
            const iframecontent = $iframe.contents().find('body')
            cy.wrap(iframecontent).click().clear().type('Hi Team').type('{selectAll}')
        })
    }
    ValidatingBoldBtn() {
        cy.get(IframeElement.ClickBold).click()
    }
    ClickingBold() {
        // selecting text and maling bold
        cy.get(IframeElement.ClickBold).click()
    }
    ValidatingItalicBtn() {
        cy.get(IframeElement.ItalicBtn).click().should('be.visible')
    }
    ClickingItalic() {
        // Text in Italic Format
        cy.get(IframeElement.ClickItalic).click()
    }
    ValidateFormatBtn() {
        cy.contains(IframeElement.FormatBtn).click().should('be.visible').and('be.enabled')
    }
    ClickingFormat() {
        //Clicking the text in formet menu
        cy.get(IframeElement.ClickFormatmenu).click()
    }
    
    ClickingAllingment() {
        // changing the Allignment
        cy.get(IframeElement.Clickcenteralignment).click()
    }

}
export default IFrame;