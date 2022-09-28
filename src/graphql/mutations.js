/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createKind = /* GraphQL */ `
  mutation CreateKind(
    $input: CreateKindInput!
    $condition: ModelKindConditionInput
  ) {
    createKind(input: $input, condition: $condition) {
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
export const updateKind = /* GraphQL */ `
  mutation UpdateKind(
    $input: UpdateKindInput!
    $condition: ModelKindConditionInput
  ) {
    updateKind(input: $input, condition: $condition) {
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
export const deleteKind = /* GraphQL */ `
  mutation DeleteKind(
    $input: DeleteKindInput!
    $condition: ModelKindConditionInput
  ) {
    deleteKind(input: $input, condition: $condition) {
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
