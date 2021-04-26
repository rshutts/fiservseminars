/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
      id
      pollCandidatesId
      name
      upvotes
      createdAt
      updatedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      author
      body
      channelID
      createdAt
      id
      updatedAt
    }
  }
`;
export const getPoll = /* GraphQL */ `
  query GetPoll($id: ID!) {
    getPoll(id: $id) {
      id
      name
      type
      candidates {
        items {
          id
          pollCandidatesId
          name
          upvotes
          createdAt
          updatedAt
        }
        nextToken
      }
      itemType
      createdAt
    }
  }
`;
export const itemsByType = /* GraphQL */ `
  query ItemsByType(
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelPollFilterInput
    $itemType: String
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    itemsByType(
      createdAt: $createdAt
      filter: $filter
      itemType: $itemType
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        type
        candidates {
          items {
            id
            pollCandidatesId
            name
            upvotes
            createdAt
            updatedAt
          }
          nextToken
        }
        itemType
        createdAt
      }
      nextToken
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pollCandidatesId
        name
        upvotes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        author
        body
        channelID
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const listPolls = /* GraphQL */ `
  query ListPolls(
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        candidates {
          items {
            id
            pollCandidatesId
            name
            upvotes
            createdAt
            updatedAt
          }
          nextToken
        }
        itemType
        createdAt
      }
      nextToken
    }
  }
`;
export const messagesByChannelID = /* GraphQL */ `
  query MessagesByChannelID(
    $channelID: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    messagesByChannelID(
      channelID: $channelID
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        author
        body
        channelID
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
