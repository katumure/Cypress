import * as CheckboxElement from '../../support/Elements/CheckBox'
class CHeckBox {
    titleVerify() {
        //Checking the page titla equal to given title
        cy.title().should('eq', 'The Internet')
    }
    valiodatePageHeader() {
        // Validating header visible or not
        cy.get('h1').should("be.visible")
    }
    VisibelCheck() {
        // check the element is visible  or not
        cy.contains(CheckboxElement.ClickCheckBox).should('be.visible')
    }
    ValidatingText() {
        cy.contains(CheckboxElement.ClickCheckBox).should('have.text', 'Checkboxes')
    }
    ClickingCheckBox() {

        cy.contains(CheckboxElement.ClickCheckBox).should('have.text', 'Checkboxes')
        cy.contains(CheckboxElement.ClickCheckBox).click()
        //cy.get(CheckboxElement.ClickCheckBox).click()
    }
    ValidatingCheckBoxClicked() {
        // If checkbox clicked it will direct to this page
        cy.get('h3').should("be.visible")
    }
    ClickingOption1() {
        //Selecting the CheckBox
        cy.get(CheckboxElement.Clickoption).first().click()
        // cy.get(CheckboxElement.Clickoption2).check().should('be.checked')

    }
    ValidatingOption1Clicked() {
        //validating the first checkbox clicked or not
        cy.get(CheckboxElement.Clickoption).first().should("be.checked")
    }
    ClickingOption2() {
        //checking the last element clicked or not
        cy.get(CheckboxElement.Clickoption).last().click()
    }
    SelectBothCheckbox() {
        //selecting the both checkboxes
        cy.get(CheckboxElement.Clickoption2).check().should('be.checked')
    }

}
export default CHeckBox;