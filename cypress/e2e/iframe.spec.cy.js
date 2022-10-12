
import IframeTest from '../support/pageObjects/iFrame.po'
const Iframestest = new IframeTest()


describe('File Upload Test Case', function () {
  beforeEach(() => {
    cy.visit(Cypress.env('Homepage'));
  })
  it('Iframe test Case', function () {
    Iframestest.titleVerify()//Verifying PageTitle
    Iframestest.Checklength()//checking gthe element length
    Iframestest.ValidatePageHeader()//Validating PageHeader
    Iframestest.ClickingFrame()//Clicking the frame button
    Iframestest.ValidateFrameBtnClicked()//validating the frma clicked
    Iframestest.VisibleFrameBtn()//validating the frame button visible or not
    Iframestest.ClickingIframe()//clciking the Ifrsme button
    Iframestest.ValidateIframeClicked()//validating the Iframe clicked
    Iframestest.ClickingFrameBody()//clciking the framebody
    Iframestest.ValidatingBoldBtn()//validating the bold button
    Iframestest.ClickingBold()//clicking the bold button
    Iframestest.ValidatingItalicBtn()//vakidating the Itakic button
    Iframestest.ClickingItalic()//clicking the Ityalic button
    Iframestest.ValidateFormatBtn()//validating hte format button
    Iframestest.ClickingFormat()//clicking the format button
    Iframestest.ClickingAllingment()//clicking the Allignment button

  })
})
