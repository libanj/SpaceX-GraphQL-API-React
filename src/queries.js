import { gql } from "@apollo/client";

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const LAUNCHES = gql`
  query GetLaunches {
    launchesPast(sort: "mission_name") {
      id
      links {
        flickr_images
        article_link
      }
      mission_name
      details
    }
  }
`;

export const LAUNCH = gql`
  query GetLaunch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      links {
        flickr_images
        mission_patch_small
      }
    }
  }
`;
