class AutomationPage  {
  
  static get nameField() {
    return cy.get("#firstName");
  }
  static get lastnameField() {
    return cy.get("#lastName");
  }
  static get emailField() {
    return cy.get("#userEmail");
  }
  static get genderWrapper() {
    return cy.get("#genterWrapper");
  }
  static get numberField() {
    return cy.get("#userNumber");
  }
  static get DOBField() {
    return cy.get("#dateOfBirthInput");
  }
  static get subjectsField() {
    return cy.get("#subjectsContainer");
  }
  static get hobbiesWrapper() {
    return cy.get(".custom-control");
  }
  static get uploadFile() {
    return cy.get('input[type=file]').selectFile(['willSmith.jpg']);
  }
  static get yearSelection() {
    return cy.get('.react-datepicker__year-select');
  }
  static get monthSelection() {
    return cy.get('.react-datepicker__month-select');
  }
  static get daySelection() {
    return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
  }
  static get picUpload() {
    return cy.get('#uploadPicture').selectFile('cypress/fixtures/willSmith.jpg')
  }
  static get addressField() {
    return cy.get("#currentAddress");
  }
  static get stateButton() {
    return cy.get("#state");
  }
  static get cityButton() {
    return cy.get("#city");
  }
  static get chooseState() {
    return cy.get("#react-select-3-option-0");
  }
  static get chooseCity() {
    return cy.get("#react-select-4-option-0");
  }
  static get submitBtn() {
    return cy.get("#submit");
  }
  static get gridcells() {
    return cy.get('td');
}
static findRow(value) {
    return this.gridcells.contains('td',(value)).parent();
}
}


export default AutomationPage;
