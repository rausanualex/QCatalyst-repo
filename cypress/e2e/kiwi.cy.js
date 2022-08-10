import {kiwi} from "../pages/KiwiPage";
import {visitPage} from "../pages/VisitPage";


describe('Testing different scenarios for search functionality on Kiwi.', () => {

    beforeEach(() => {
        visitPage.navigateToKiwi();
        kiwi.clickOnAcceptCookies();
    })

    it('Search scenario test with all search fields completed and check accommodation with booking.', () => {
        kiwi.assertAccommodationIsChecked();
        kiwi.assertFromFieldIsPopulatedWithCurrentLocation();
        kiwi.addToField();
        kiwi.selectDepartureDayTomorrowAndReturnFiveDaysAfter();
        kiwi.openBookingSite();
        kiwi.assertDestinationInBooking();
    })

    it('Search scenario test with all search fields completed and uncheck accommodation with booking.', () => {
        kiwi.assertAccommodationIsNotChecked();
        kiwi.assertFromFieldIsPopulatedWithCurrentLocation();
        kiwi.addToField();
        kiwi.selectDepartureDayTomorrowAndReturnFiveDaysAfter();
        kiwi.clickOnSearch();
        kiwi.assertFlightsAreDisplayed();
    })

    it('Search scenario test with no return date and check accommodation with booking.', () => {
        kiwi.assertAccommodationIsChecked();
        kiwi.assertFromFieldIsPopulatedWithCurrentLocation();
        kiwi.addToField();
        kiwi.addDepartureDayTomorrowAndNoReturnDate();
        kiwi.openBookingSite();
        kiwi.assertDestinationInBooking();
    })

    it('Search scenario test with no return date and uncheck accommodation with booking.', () => {
        kiwi.assertAccommodationIsNotChecked();
        kiwi.assertFromFieldIsPopulatedWithCurrentLocation();
        kiwi.addToField();
        kiwi.addDepartureDayTomorrowAndNoReturnDate();
        kiwi.clickOnSearch();
        kiwi.assertFlightsAreDisplayed();
    })

})