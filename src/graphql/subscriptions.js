/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateByID = /* GraphQL */ `
  subscription OnUpdateByID($id: ID!) {
    onUpdateByID(id: $id) {
      id
      clientId
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
        nextToken
      }
      itemType
      createdAt
      owner
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
        nextToken
      }
      itemType
      createdAt
      owner
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
        nextToken
      }
      itemType
      createdAt
      owner
      updatedAt
    }
  }
`;
export const onCreateCandidate = /* GraphQL */ `
  subscription OnCreateCandidate {
    onCreateCandidate {
      id
      pollCandidatesId
      candidateType
      name
      upvotes
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCandidate = /* GraphQL */ `
  subscription OnUpdateCandidate {
    onUpdateCandidate {
      id
      pollCandidatesId
      candidateType
      name
      upvotes
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCandidate = /* GraphQL */ `
  subscription OnDeleteCandidate {
    onDeleteCandidate {
      id
      pollCandidatesId
      candidateType
      name
      upvotes
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      channelID
      author
      body
      createdAt
      updatedAt
    }
  }
`;
