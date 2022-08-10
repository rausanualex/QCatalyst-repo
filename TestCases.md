## LEGEND
- Action to perform
  - Expected results


## Search scenario test with all search fields completed and check accommodation with booking.

- 1 Visit the site  https://www.kiwi.com
  - Browser navigate to https://www.kiwi.com page
- 2 Click on accept privacy pop-up
  - Accepted privacy pop-up disappears
- 3 Verify accommodation with booking is checked
  - Accommodation with booking should be checked
- 4 Verify current location is present in "From" field
  - "From" field should be populated with current location
- 5 Insert "Barcelona" as destination
  - "To" field should be populated with "Barcelona"
- 6 Set departure day to be tomorrow.
  - Departure date should be tomorrow.
- 7 Set return date to be 5 days after departure date
  - Return date should be 5 days after departure date
- 8 Click on "Set dates"
  - Departure-Return calendar should disappear
- 9 Click on "Search"
  - You should be redirected to https://booking.com page
- 10 Assert Destination is present on booking
  - Search field should be populated with "Barcelona"

## Search scenario test with all search fields completed and uncheck accommodation with booking.

- 1 Visit the site  https://www.kiwi.com
  - Browser navigate to https://www.kiwi.com page
- 2 Click on accept privacy pop-up
  - Accepted privacy pop-up disappears
- 3 Uncheck accommodation with booking
  - Accommodation with booking should not be checked
- 4 Verify current location is present in "From" field
  - "From" field should be populated with current location
- 5 Insert "Barcelona" as destination
  - "To" field should be populated with "Barcelona"
- 6 Set departure day to be tomorrow.
  - Departure date should be tomorrow.
- 7 Set return date to be 5 days after departure date
  - Return date should be 5 days after departure date
- 8 Click on "Set dates"
  - Departure-Return calendar should disappear
- 9 Click on search 
  - flights should be displayed
- 10 Verify flights has a length bigger then 1
  - flights displayed should have a length bigger then 1

  ## Search scenario test with no return date and check accommodation with booking

- 1 Visit the site  https://www.kiwi.com
  - Browser navigate to https://www.kiwi.com page
- 2 Click on accept privacy pop-up
  - Accepted privacy pop-up disappears
- 3 Verify accommodation with booking is checked
  - Accommodation with booking should be checked
- 4 Verify current location is present in "From" field
  - "From" field should be populated with current location
- 5 Insert "Barcelona" as destination
  - "To" field should be populated with "Barcelona"
- 6 Set departure day to be tomorrow.
  - Departure date should be tomorrow.
- 7 Click on "Set dates"
  - Departure-Return calendar should disappear
- 8 Click on "Search"
  - You should be redirected to https://booking.com page
- 9 Assert Destination is present on booking
  - Search field should be populated with "Barcelona"

## Search scenario test with no return date and uncheck accommodation with booking

- 1 Visit the site  https://www.kiwi.com
  - Browser navigate to https://www.kiwi.com page
- 2 Click on accept privacy pop-up
  - Accepted privacy pop-up disappears
- 3 Uncheck accommodation with booking
  - Accommodation with booking should not be checked
- 4 Verify current location is present in "From" field
  - "From" field should be populated with current location
- 5 Insert "Barcelona" as destination
  - "To" field should be populated with "Barcelona"
- 6 Set departure day to be tomorrow.
  - Departure date should be tomorrow.
- 7 Click on "Set dates"
  - Departure-Return calendar should disappear
- 8 Click on "Search"
  - flights should be displayed
- 9 Verify flights has a length bigger then 1
  - flights displayed should have a length bigger then 1