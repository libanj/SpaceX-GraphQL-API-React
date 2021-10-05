import { gql } from "@apollo/client";

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const SHIPS = gql`
  query GetShips {
    ships {
      id
      image
      model
      name
      roles
      type
      weight_kg
      year_built
      active
    }
  }
`;
