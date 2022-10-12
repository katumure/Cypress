import CheckBox from '../support/pageObjects/checkBox.po'
const Checkboxtest = new CheckBox()


describe('check box Test Case', function () {
  beforeEach(() => {
    cy.visit(Cypress.env('Homepage'));
  })
  it('checkbox', function () {
    Checkboxtest.titleVerify()//Verifying PageTitle
    Checkboxtest.valiodatePageHeader()//Validating PageHeader
    Checkboxtest.VisibelCheck()//Checking the element visible
    Checkboxtest.ValidatingText()//Validating the element text
    Checkboxtest.ClickingCheckBox()//Clicking the element
    Checkboxtest.ValidatingCheckBoxClicked()//validating the button clicked or not
    Checkboxtest.ClickingOption1()////clicking the checkbox 1
    Checkboxtest.ValidatingOption1Clicked()//validating the checkbox1 clicked or not
    Checkboxtest.ClickingOption2()//Clicking the option 2
    Checkboxtest.SelectBothCheckbox()//selecting the checkboxes

  })
})