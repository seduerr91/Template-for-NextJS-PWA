/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getKind = /* GraphQL */ `
  query GetKind($id: ID!) {
    getKind(id: $id) {
      id
      title
      prompt
      username
      result
      createdAt
      updatedAt
    }
  }
`;
export const listKinds = /* GraphQL */ `
  query ListKinds(
    $filter: ModelKindFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKinds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        prompt
        username
        result
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const kindsByUserName = /* GraphQL */ `
  query KindsByUserName(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelKindFilterInput
    $limit: Int
    $nextToken: String
  ) {
    kindsByUserName(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        prompt
        username
        result
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
