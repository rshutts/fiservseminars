/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $condition: ModelCandidateConditionInput
    $input: CreateCandidateInput!
  ) {
    createCandidate(condition: $condition, input: $input) {
      id
      pollCandidatesId
      name
      upvotes
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $condition: ModelMessageConditionInput
    $input: CreateMessageInput!
  ) {
    createMessage(condition: $condition, input: $input) {
      author
      body
      channelID
      createdAt
      id
      updatedAt
    }
  }
`;
export const createPoll = /* GraphQL */ `
  mutation CreatePoll(
    $condition: ModelPollConditionInput
    $input: CreatePollInput!
  ) {
    createPoll(condition: $condition, input: $input) {
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
export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $condition: ModelCandidateConditionInput
    $input: DeleteCandidateInput!
  ) {
    deleteCandidate(condition: $condition, input: $input) {
      id
      pollCandidatesId
      name
      upvotes
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $condition: ModelMessageConditionInput
    $input: DeleteMessageInput!
  ) {
    deleteMessage(condition: $condition, input: $input) {
      author
      body
      channelID
      createdAt
      id
      updatedAt
    }
  }
`;
export const deletePoll = /* GraphQL */ `
  mutation DeletePoll(
    $condition: ModelPollConditionInput
    $input: DeletePollInput!
  ) {
    deletePoll(condition: $condition, input: $input) {
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
export const upVote = /* GraphQL */ `
  mutation UpVote($clientId: ID, $id: ID) {
    upVote(clientId: $clientId, id: $id) {
      clientId
      id
    }
  }
`;
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $condition: ModelCandidateConditionInput
    $input: UpdateCandidateInput!
  ) {
    updateCandidate(condition: $condition, input: $input) {
      id
      pollCandidatesId
      name
      upvotes
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $condition: ModelMessageConditionInput
    $input: UpdateMessageInput!
  ) {
    updateMessage(condition: $condition, input: $input) {
      author
      body
      channelID
      createdAt
      id
      updatedAt
    }
  }
`;
export const updatePoll = /* GraphQL */ `
  mutation UpdatePoll(
    $condition: ModelPollConditionInput
    $input: UpdatePollInput!
  ) {
    updatePoll(condition: $condition, input: $input) {
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
