import * as DragandDropElement from '../Elements/DragandDrop.el'
const dataTransfer = new DataTransfer();

class dragandDrop {
    titleVerify() {
        //Checking the page titla equal to given title
        cy.title().should('eq', 'The Internet')
    }
    validatingPageHeader() {
        // Validating header visible or not
        cy.get('h1').should("be.visible")
    }
    validatingText() {
        //checking the element text vailable or not
        cy.contains(DragandDropElement.clickDragandDrop).should('have.text', 'Drag and Drop')
    }
    clickingDragandDrop() {
        //Clicking the DragandDrop element
        cy.contains(DragandDropElement.clickDragandDrop).click()
        //cy.get(DragandDropElement.clickDragandDrop).click()
    }
    ValidatingClicked() {
        // Validating the DragandDrop Clicked or not
        cy.get('h3').should("be.visible")

    }
    ClickingDragItem() {
        // Dragging the Element
        cy.get(DragandDropElement.dragitem).trigger('dragstart', { dataTransfer })
    }

    clickDropItem() {
        //Droping the Element
        cy.get(DragandDropElement.dropitem).trigger('drop', { dataTransfer })
    }
}
export default dragandDrop;