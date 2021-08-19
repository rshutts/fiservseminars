/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
      id
      title
      seconds
      currentQuestion
      questionOrder
      started
      questionTime
      view
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
      id
      title
      seconds
      currentQuestion
      questionOrder
      started
      questionTime
      view
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
      id
      title
      seconds
      currentQuestion
      questionOrder
      started
      questionTime
      view
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestions = /* GraphQL */ `
  subscription OnCreateQuestions {
    onCreateQuestions {
      id
      image
      imageFromS3
      youtube
      question
      answerOne
      answerOneCorrect
      answerTwo
      answerTwoCorrect
      answerThree
      answerThreeCorrect
      answerFour
      answerFourCorrect
      quizID
      order
      public
      fromLibrary
      category
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestions = /* GraphQL */ `
  subscription OnUpdateQuestions {
    onUpdateQuestions {
      id
      image
      imageFromS3
      youtube
      question
      answerOne
      answerOneCorrect
      answerTwo
      answerTwoCorrect
      answerThree
      answerThreeCorrect
      answerFour
      answerFourCorrect
      quizID
      order
      public
      fromLibrary
      category
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestions = /* GraphQL */ `
  subscription OnDeleteQuestions {
    onDeleteQuestions {
      id
      image
      imageFromS3
      youtube
      question
      answerOne
      answerOneCorrect
      answerTwo
      answerTwoCorrect
      answerThree
      answerThreeCorrect
      answerFour
      answerFourCorrect
      quizID
      order
      public
      fromLibrary
      category
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestionsDB = /* GraphQL */ `
  subscription OnCreateQuestionsDB {
    onCreateQuestionsDB {
      id
      image
      imageFromS3
      youtube
      question
      answerOne
      answerOneCorrect
      answerTwo
      answerTwoCorrect
      answerThree
      answerThreeCorrect
      answerFour
      answerFourCorrect
      relatedQuestion
      public
      category
      language
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestionsDB = /* GraphQL */ `
  subscription OnUpdateQuestionsDB {
    onUpdateQuestionsDB {
      id
      image
      imageFromS3
      youtube
      question
      answerOne
      answerOneCorrect
      answerTwo
      answerTwoCorrect
      answerThree
      answerThreeCorrect
      answerFour
      answerFourCorrect
      relatedQuestion
      public
      category
      language
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestionsDB = /* GraphQL */ `
  subscription OnDeleteQuestionsDB {
    onDeleteQuestionsDB {
      id
      image
      imageFromS3
      youtube
      question
      answerOne
      answerOneCorrect
      answerTwo
      answerTwoCorrect
      answerThree
      answerThreeCorrect
      answerFour
      answerFourCorrect
      relatedQuestion
      public
      category
      language
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSubscribers = /* GraphQL */ `
  subscription OnCreateSubscribers {
    onCreateSubscribers {
      id
      type
      score
      quizID
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSubscribers = /* GraphQL */ `
  subscription OnUpdateSubscribers {
    onUpdateSubscribers {
      id
      type
      score
      quizID
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSubscribers = /* GraphQL */ `
  subscription OnDeleteSubscribers {
    onDeleteSubscribers {
      id
      type
      score
      quizID
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateResponses = /* GraphQL */ `
  subscription OnCreateResponses {
    onCreateResponses {
      id
      quiz
      subscriber
      question
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateResponses = /* GraphQL */ `
  subscription OnUpdateResponses {
    onUpdateResponses {
      id
      quiz
      subscriber
      question
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteResponses = /* GraphQL */ `
  subscription OnDeleteResponses {
    onDeleteResponses {
      id
      quiz
      subscriber
      question
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLanguages = /* GraphQL */ `
  subscription OnCreateLanguages {
    onCreateLanguages {
      id
      type
      code
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLanguages = /* GraphQL */ `
  subscription OnUpdateLanguages {
    onUpdateLanguages {
      id
      type
      code
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLanguages = /* GraphQL */ `
  subscription OnDeleteLanguages {
    onDeleteLanguages {
      id
      type
      code
      createdAt
      updatedAt
    }
  }
`;
export const onCastVote = /* GraphQL */ `
  subscription OnCastVote {
    onCastVote {
      id
      type
      name
      description
      votes
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCandidate = /* GraphQL */ `
  subscription OnCreateCandidate {
    onCreateCandidate {
      id
      type
      name
      description
      votes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCandidate = /* GraphQL */ `
  subscription OnUpdateCandidate {
    onUpdateCandidate {
      id
      type
      name
      description
      votes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCandidate = /* GraphQL */ `
  subscription OnDeleteCandidate {
    onDeleteCandidate {
      id
      type
      name
      description
      votes
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
      group
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
      group
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
      group
      body
      createdAt
      updatedAt
    }
  }
`;
