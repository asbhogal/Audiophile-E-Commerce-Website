import { gql } from "./constants";
import { shopifyFetch } from "./fetcher";

export async function getCollections() {
  return shopifyFetch({
    query: gql`
      {
        collections(first: 5) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `,
  });
}
