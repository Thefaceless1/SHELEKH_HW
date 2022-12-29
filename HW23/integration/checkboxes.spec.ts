import {describe,it} from "mocha";
require('cypress-xpath');
import * as cypress from "cypress";
import {Cy} from "../support/cy";

/**
 * Сделал эту домашку по минимуму, т.к этот фреймворк отторгает очень сильно. Для себя уже определился что буду работать c Selenium и Playwright в дальнейшем.
 */

describe("Checkboxes page",  () =>{
    beforeEach(() => {
        Cy.getStart();
        Cy.goToCheckBoxes()
    })
    it("Default checkboxes values",() => {
        Cy.getCheckBoxes.first().should("not.be.checked");
        Cy.getCheckBoxes.last().should("be.checked");
    })
    it("Check/uncheck checkbox after click", () => {
        Cy.clickElement(Cy.getCheckBoxes.first());
        Cy.getCheckBoxes.first().should("be.checked");
        Cy.clickElement(Cy.getCheckBoxes.last());
        Cy.getCheckBoxes.last().should("not.be.checked");
    })
})