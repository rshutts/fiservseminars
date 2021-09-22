/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateById = /* GraphQL */ `
  subscription OnUpdateById($id: ID!) {
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
<<<<<<< HEAD
=======
        items {
          id
          pollCandidatesId
          image
          name
          upvotes
          createdAt
          updatedAt
        }
>>>>>>> test
        nextToken
      }
      itemType
      createdAt
<<<<<<< HEAD
      owner
=======
>>>>>>> test
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
<<<<<<< HEAD
=======
        items {
          id
          pollCandidatesId
          image
          name
          upvotes
          createdAt
          updatedAt
        }
>>>>>>> test
        nextToken
      }
      itemType
      createdAt
<<<<<<< HEAD
      owner
=======
>>>>>>> test
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
<<<<<<< HEAD
=======
        items {
          id
          pollCandidatesId
          image
          name
          upvotes
          createdAt
          updatedAt
        }
>>>>>>> test
        nextToken
      }
      itemType
      createdAt
<<<<<<< HEAD
      owner
=======
>>>>>>> test
      updatedAt
    }
  }
`;
export const onCreateCandidate = /* GraphQL */ `
  subscription OnCreateCandidate {
    onCreateCandidate {
      id
      pollCandidatesId
      image
      name
      upvotes
<<<<<<< HEAD
      owner
=======
>>>>>>> test
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
      image
      name
      upvotes
<<<<<<< HEAD
      owner
=======
>>>>>>> test
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
      image
      name
      upvotes
<<<<<<< HEAD
      owner
=======
>>>>>>> test
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
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
      author
      body
      createdAt
      updatedAt
    }
  }
`;
