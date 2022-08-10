import {commonMethods} from "../common/CommonMethods";
import {selectors} from "../data/Selectors";

export class KiwiPage {

    clickOnAcceptCookies() {
        commonMethods.clickOnVisibleElement(selectors.acceptCookies);
    }

    assertAccommodationIsChecked() {
        cy.get(selectors.checkAccommodationComponent).within(() => {
            cy.get(selectors.checkbox)
                .should('be.checked');
        })
    }

    assertAccommodationIsNotChecked() {
        this.uncheckAccommodationWithBooking();
        cy.get(selectors.checkAccommodationComponent).within(() => {
            cy.get(selectors.checkbox)
                .should('not.be.checked');
        })
    }

    uncheckAccommodationWithBooking() {
        cy.get(selectors.checkAccommodationComponent)
            .should('be.visible')
            .click();
    }

    assertFromFieldIsPopulatedWithCurrentLocation() {
        cy.get(selectors.fromField).within(() => {
            this.assertFieldIsNotEmpty('rgb(0, 169, 145)');
        })
    }

    assertFieldIsNotEmpty(color) {
        cy.get(selectors.inputField)
            .should('have.css', 'background-color', color)
    }


    addToField() {
        const destination = 'Barcelona';
        cy.get(selectors.toField).within(() => {
            this.assertFieldIsEmpty();
            cy.get(selectors.searchInput)
                .type(destination + '{enter}', {delay: 350});
            this.assertFieldIsNotEmpty('rgb(249, 151, 30)');
            cy.wrap(destination).as('destination');
        })
    }

    assertFieldIsEmpty() {
        cy.get(selectors.searchInput)
            .should('be.empty');
    }

    selectDepartureDayTomorrowAndReturnFiveDaysAfter() {
        this.addDepartureDayTomorrow();
        this.addReturnDayAfterFiveDays()
        this.clickOnSateDates();
    }

    addDepartureDayTomorrow() {
        cy.get(selectors.dateInput)
            .first()
            .should('be.visible')
            .click();
        this.addFlyingDate(1, selectors.departureRange);
    }

    addFlyingDate(daysDifference, departureOrReturnSelector) {
        let date = new Date();
        date.setDate(date.getDate() + daysDifference);
        let futureDay = date.getDate();
        let futureMonth = date.toLocaleString('default', {month: "short"});

        cy.get(selectors.calendar).first()
            .invoke('attr', 'data-value').then(dateAttribute => {
            if (!dateAttribute.includes(futureMonth)) {
                cy.get(selectors.nextMonth)
                    .click();
                cy.get(selectors.calendar)
                    .first()
                    .find(departureOrReturnSelector)
                    .contains(futureDay)
                    .click();
            } else {
                cy.get(selectors.calendar)
                    .first()
                    .find(departureOrReturnSelector)
                    .contains(futureDay)
                    .click();
            }
        })
    }

    addReturnDayAfterFiveDays() {
        this.addFlyingDate(5, selectors.returnDate);
    }

    clickOnSateDates() {
        commonMethods.clickOnVisibleElement(selectors.setDatesBtn);
    }

    clickOnSearch() {
        commonMethods.clickOnVisibleElement(selectors.searchBtn);
    }

    openBookingSite() {
        cy.window().then(win => {
            cy.stub(win, 'open');
            this.clickOnSearch();
        });
    }

    assertDestinationInBooking() {
        cy.get('@destination').then(dest => {
            cy.get('#ss')
                .should('have.attr', 'value', dest);
        })
    }

    assertFlightsAreDisplayed() {
        cy.get(selectors.flightsList).then($el => {
            expect($el).to.have.length.greaterThan(1)
        })
    }

    addDepartureDayTomorrowAndNoReturnDate() {
        this.addDepartureDayTomorrow();
        this.clickOnSateDates();
    }

}

export const kiwi = new KiwiPage();