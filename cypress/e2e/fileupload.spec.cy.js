
import Fileupload from '../support/pageObjects/FileUpload.po'
const FileUploadtest = new Fileupload()


describe('File Upload Test Case', function () {
  beforeEach(() => {
    cy.visit(Cypress.env('Homepage'));
  })
  it('uploading thge file', function () {
    FileUploadtest.titleVerify()//Verifying PageTitle
    FileUploadtest.validatingPageHeader()//Validating PageHeader
    FileUploadtest.CheckVisible()//checking the element visibe
    FileUploadtest.valiiateText()//validating the element text
    FileUploadtest.clickingFileuploadBtn()//Clicking the fileupload button
    FileUploadtest.ValidateFileBtnClick()//Validating the filebutton exist or not
    FileUploadtest.clickingChoosenFileBth()//Clicking the choosenBtn
    FileUploadtest.validateSubmitText()// validating the submit has text
    FileUploadtest.clickingFileSubmitBtn()//Clicking the element
    FileUploadtest.ValidateSubmitBtn()// validating the submit button clicked
    FileUploadtest.ValidateUploadSuccess()//validating the file upload succeed
    
  })
})