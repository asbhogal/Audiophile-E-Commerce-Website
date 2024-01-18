import { gql } from "./constants";
import { shopifyFetch } from "./fetcher";

export async function getAllProducts() {
  return shopifyFetch({
    query: gql`
      {
        products(first: 6) {
          edges {
            node {
              id
              title
              description
            }
          }
        }
      }
    `,
  });
}
