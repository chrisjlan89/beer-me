import { gql } from "@apollo/client";

const BREWERIES_WITH_FILTERS = gql`
  query allBreweriesFilterApplied($postal_code: String, $state: String) {
    allBreweriesFilterApplied(postal_code: $postal_code, state: $state) {
      name
      state
      lng
      lat
      website_url

      opening_hours {
        weekday_text
      }
    }
  }
`;
export default BREWERIES_WITH_FILTERS;
