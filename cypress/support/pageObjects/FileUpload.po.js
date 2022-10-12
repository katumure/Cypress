import * as FileUploadElement from '../Elements/FileUpload'

class FileUpload {
    titleVerify() {
        //Checking the page titla equal to given title
        cy.title().should('eq', 'The Internet')
    }
    validatingPageHeader() {
        // Validating header visible or not
        cy.get('h1').should("be.visible")
    }
    CheckVisible() {
        // check the element is visible  or not
        cy.contains(FileUploadElement.FileUploadBtn).and('be.visible')
    }
    valiiateText() {
        cy.contains(FileUploadElement.FileUploadBtn).should('have.text', 'File Upload')
    }
    clickingFileuploadBtn() {
        //Clicking the FileUpload Button
        cy.contains(FileUploadElement.FileUploadBtn).click()

    }
    ValidateFileBtnClick() {
        // Validating the file upload clicked or not
        cy.get('h3')

    }
    clickingChoosenFileBth() {
        //Clicking the ChoosenFile Button and selecting document
        cy.get(FileUploadElement.ChoosenFileBth).selectFile('C:/Cypress10/cypress/fixtures/Document.json')

    }
    validateSubmitText() {
        cy.get(FileUploadElement.FileSubmitBtn).should('have.value', 'Upload')
    }
    clickingFileSubmitBtn() {
        //Clicking the FileSubmit Button
        cy.get(FileUploadElement.FileSubmitBtn).click()
    }
    ValidateSubmitBtn() {
        cy.get('h3').should("be.visible")
    }
    ValidateUploadSuccess() {
        cy.get(FileUploadElement.UploadSuccessc).click()
    }

}
export default FileUpload;