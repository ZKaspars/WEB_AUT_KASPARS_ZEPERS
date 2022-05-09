
import AutomationPage from "../../pageObjects/AutomationPage";

context("Automation Page", () => {
  context("Fill data scenario", () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });

    it("Fill data scenario", () => {
      cy.fixture("userData").then((userData) => {
    AutomationPage.nameField.type(userData.name);
    AutomationPage.lastnameField.type(userData.lastName);
    AutomationPage.emailField.type(userData.email);
    AutomationPage.genderWrapper.contains(userData.gender).click();
    AutomationPage.numberField.type(userData.number);
    AutomationPage.DOBField.click();
    AutomationPage.yearSelection.select(userData.birthYear);
    AutomationPage.monthSelection.select(userData.birthMonth);
    AutomationPage.daySelection.contains(userData.birthDay).click();
    AutomationPage.subjectsField.type(userData.subjects+("{enter}"));
    AutomationPage.hobbiesWrapper.contains(userData.hobbies).click();
    AutomationPage.picUpload;
    AutomationPage.addressField.type(userData.address);
    AutomationPage.stateButton.click();
    AutomationPage.chooseState.contains(userData.state).click();
    AutomationPage.cityButton.click();
    AutomationPage.chooseCity.contains(userData.city).click();
    AutomationPage.submitBtn.click();

    AutomationPage.findRow('Student Name').should(
      "contain",
      userData.name)
    AutomationPage.findRow('Student Email').should(
        "contain",
        userData.email)   
    AutomationPage.findRow('Gender').should(
      "contain",
      userData.gender)
    AutomationPage.findRow('Mobile').should(
        "contain",
        userData.number)
    AutomationPage.findRow('Date of Birth').should(
      "contain",
      userData.birthDay+" " + userData.birthMonth + ","+ userData.birthYear)
    AutomationPage.findRow('Subjects').should(
        "contain",
        userData.subjects)   
    AutomationPage.findRow('Hobbies').should(
      "contain",
      userData.hobbies)
    AutomationPage.findRow('Picture').should(
        "contain",
        "willSmith.jpg");
    AutomationPage.findRow('Address').should(
          "contain",
          userData.address);
    AutomationPage.findRow('State and City').should(
          "contain",
          userData.state+ " " + userData.city);
      });
    });
  });
});
