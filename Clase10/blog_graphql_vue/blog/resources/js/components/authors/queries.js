import gpl from "graphql-tag";

export const AUTHORS_QUERY = gpl`
query {
    authors {
      paginatorInfo {
        hasMorePages
      }
      data {
        id
        name
        birth_date
        genre
        nationality
      }
    }
  }
`;
