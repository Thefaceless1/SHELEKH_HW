export class Cy {
public static  getStart () {
     cy.visit("https://the-internet.herokuapp.com/");
}
public static  goToCheckBoxes () {
    const checkbox = this.getElement("//a[text()='Checkboxes']");
    checkbox.click();
}
    public static  goToInputs () {
        const checkbox = this.getElement("//a[text()='Inputs']");
        checkbox.click();
    }

public static  getElement (selector : string)  : Cypress.Chainable<JQuery<HTMLElement>> {
    return  cy.xpath(selector);
}
public static clickElement (element :Cypress.Chainable<JQuery<HTMLElement>>) {
    element.click();
}
public static get getCheckBoxes () {
    return this.getElement("//input[@type='checkbox']");
}
public static get getInput () {
    return Cy.getElement("//input[@type='number']");
}
public static increaseInputValue () {
    this.getInput.click().type('{upArrow}')
}
    public static decreaseInputValue () {
        this.getInput.click().type('{downArrow}');
    }
}
