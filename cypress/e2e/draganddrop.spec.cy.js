
import DragandDropItem from '../support/pageObjects/dragandDrop.po'
const DragandDrop = new DragandDropItem()


describe('DragandDropItem Test Case', function () {
  beforeEach(() => {
    cy.visit(Cypress.env('Homepage'))
  })
  it('drag and drop element', function () {
    DragandDrop.titleVerify()//Verifying PageTitle
    DragandDrop.validatingPageHeader()//Validating PageHeader
    DragandDrop.validatingText()//validating the element has text
    DragandDrop.clickingDragandDrop()//Clicking the ragandRop button
    DragandDrop.ValidatingClicked()//vaidating the DragandDrop clicked
    DragandDrop.ClickingDragItem()//Clicking the element
    DragandDrop.clickDropItem()//Clicking the element
  })
})