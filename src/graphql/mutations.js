/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
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
export const createQuestions = /* GraphQL */ `
  mutation CreateQuestions(
    $input: CreateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    createQuestions(input: $input, condition: $condition) {
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
export const updateQuestions = /* GraphQL */ `
  mutation UpdateQuestions(
    $input: UpdateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    updateQuestions(input: $input, condition: $condition) {
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
export const deleteQuestions = /* GraphQL */ `
  mutation DeleteQuestions(
    $input: DeleteQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    deleteQuestions(input: $input, condition: $condition) {
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
export const createQuestionsDB = /* GraphQL */ `
  mutation CreateQuestionsDB(
    $input: CreateQuestionsDBInput!
    $condition: ModelQuestionsDBConditionInput
  ) {
    createQuestionsDB(input: $input, condition: $condition) {
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
export const updateQuestionsDB = /* GraphQL */ `
  mutation UpdateQuestionsDB(
    $input: UpdateQuestionsDBInput!
    $condition: ModelQuestionsDBConditionInput
  ) {
    updateQuestionsDB(input: $input, condition: $condition) {
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
export const deleteQuestionsDB = /* GraphQL */ `
  mutation DeleteQuestionsDB(
    $input: DeleteQuestionsDBInput!
    $condition: ModelQuestionsDBConditionInput
  ) {
    deleteQuestionsDB(input: $input, condition: $condition) {
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
export const createSubscribers = /* GraphQL */ `
  mutation CreateSubscribers(
    $input: CreateSubscribersInput!
    $condition: ModelSubscribersConditionInput
  ) {
    createSubscribers(input: $input, condition: $condition) {
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
export const updateSubscribers = /* GraphQL */ `
  mutation UpdateSubscribers(
    $input: UpdateSubscribersInput!
    $condition: ModelSubscribersConditionInput
  ) {
    updateSubscribers(input: $input, condition: $condition) {
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
export const deleteSubscribers = /* GraphQL */ `
  mutation DeleteSubscribers(
    $input: DeleteSubscribersInput!
    $condition: ModelSubscribersConditionInput
  ) {
    deleteSubscribers(input: $input, condition: $condition) {
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
export const createResponses = /* GraphQL */ `
  mutation CreateResponses(
    $input: CreateResponsesInput!
    $condition: ModelResponsesConditionInput
  ) {
    createResponses(input: $input, condition: $condition) {
      id
      quiz
      subscriber
      question
      createdAt
      updatedAt
    }
  }
`;
export const updateResponses = /* GraphQL */ `
  mutation UpdateResponses(
    $input: UpdateResponsesInput!
    $condition: ModelResponsesConditionInput
  ) {
    updateResponses(input: $input, condition: $condition) {
      id
      quiz
      subscriber
      question
      createdAt
      updatedAt
    }
  }
`;
export const deleteResponses = /* GraphQL */ `
  mutation DeleteResponses(
    $input: DeleteResponsesInput!
    $condition: ModelResponsesConditionInput
  ) {
    deleteResponses(input: $input, condition: $condition) {
      id
      quiz
      subscriber
      question
      createdAt
      updatedAt
    }
  }
`;
export const createLanguages = /* GraphQL */ `
  mutation CreateLanguages(
    $input: CreateLanguagesInput!
    $condition: ModelLanguagesConditionInput
  ) {
    createLanguages(input: $input, condition: $condition) {
      id
      type
      code
      createdAt
      updatedAt
    }
  }
`;
export const updateLanguages = /* GraphQL */ `
  mutation UpdateLanguages(
    $input: UpdateLanguagesInput!
    $condition: ModelLanguagesConditionInput
  ) {
    updateLanguages(input: $input, condition: $condition) {
      id
      type
      code
      createdAt
      updatedAt
    }
  }
`;
export const deleteLanguages = /* GraphQL */ `
  mutation DeleteLanguages(
    $input: DeleteLanguagesInput!
    $condition: ModelLanguagesConditionInput
  ) {
    deleteLanguages(input: $input, condition: $condition) {
      id
      type
      code
      createdAt
      updatedAt
    }
  }
`;
export const castVote = /* GraphQL */ `
  mutation CastVote($input: CastVoteInput!) {
    castVote(input: $input) {
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
export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $input: CreateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    createCandidate(input: $input, condition: $condition) {
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
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $input: UpdateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    updateCandidate(input: $input, condition: $condition) {
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
export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $input: DeleteCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    deleteCandidate(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
