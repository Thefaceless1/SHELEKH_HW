import {describe,it} from "mocha";
require('cypress-xpath');
import * as cypress from "cypress";
import {Cy} from "../support/cy";

describe("Inputs page",  () =>{
    beforeEach(() => {
        Cy.getStart();
        Cy.goToInputs()
    })
    it("Input element is enabled and visible",() => {

        Cy.getInput.should("not.be.disabled");
        Cy.getInput.should("be.visible");
    })
    it("Increase value after click 'up arrow'", () => {
        const iterationCount = 20;
        for (let i = 0 ; i < iterationCount ; i++) {
            Cy.increaseInputValue();
            Cy.getInput.should("have.value",i+1);
        }
    })
    it("Decrease input value after click 'down arrow'",() => {
        const iterationCount = 20;
        for (let i = 0 ; i > -iterationCount ; i--) {
            Cy.decreaseInputValue();
            Cy.getInput.should("have.value",i-1);
        }
    })
})