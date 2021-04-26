/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCandidate = /* GraphQL */ `
  subscription OnCreateCandidate {
    onCreateCandidate {
      id
      pollCandidatesId
      name
      upvotes
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      author
      body
      channelID
      createdAt
      id
      updatedAt
    }
  }
`;
export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll {
    onCreatePoll {
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
export const onDeleteCandidate = /* GraphQL */ `
  subscription OnDeleteCandidate {
    onDeleteCandidate {
      id
      pollCandidatesId
      name
      upvotes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      author
      body
      channelID
      createdAt
      id
      updatedAt
    }
  }
`;
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll {
    onDeletePoll {
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
export const onUpdateByID = /* GraphQL */ `
  subscription OnUpdateByID($id: ID!) {
    onUpdateByID(id: $id) {
      clientId
      id
    }
  }
`;
export const onUpdateCandidate = /* GraphQL */ `
  subscription OnUpdateCandidate {
    onUpdateCandidate {
      id
      pollCandidatesId
      name
      upvotes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      author
      body
      channelID
      createdAt
      id
      updatedAt
    }
  }
`;
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll {
    onUpdatePoll {
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
