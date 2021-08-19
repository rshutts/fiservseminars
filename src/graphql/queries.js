/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
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
export const listQuizs = /* GraphQL */ `
  query ListQuizs(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getQuestions = /* GraphQL */ `
  query GetQuestions($id: ID!) {
    getQuestions(id: $id) {
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
export const listQuestionss = /* GraphQL */ `
  query ListQuestionss(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getQuestionsDB = /* GraphQL */ `
  query GetQuestionsDB($id: ID!) {
    getQuestionsDB(id: $id) {
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
export const listQuestionsDBs = /* GraphQL */ `
  query ListQuestionsDBs(
    $filter: ModelQuestionsDBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionsDBs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSubscribers = /* GraphQL */ `
  query GetSubscribers($id: ID!) {
    getSubscribers(id: $id) {
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
export const listSubscriberss = /* GraphQL */ `
  query ListSubscriberss(
    $filter: ModelSubscribersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriberss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        score
        quizID
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResponses = /* GraphQL */ `
  query GetResponses($id: ID!) {
    getResponses(id: $id) {
      id
      quiz
      subscriber
      question
      createdAt
      updatedAt
    }
  }
`;
export const listResponsess = /* GraphQL */ `
  query ListResponsess(
    $filter: ModelResponsesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponsess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quiz
        subscriber
        question
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLanguages = /* GraphQL */ `
  query GetLanguages($id: ID!) {
    getLanguages(id: $id) {
      id
      type
      code
      createdAt
      updatedAt
    }
  }
`;
export const listLanguagess = /* GraphQL */ `
  query ListLanguagess(
    $filter: ModelLanguagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanguagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        code
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLangByCode = /* GraphQL */ `
  query GetLangByCode(
    $type: String
    $code: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLanguagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getLangByCode(
      type: $type
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        code
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
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
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        name
        description
        votes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCandidatesByName = /* GraphQL */ `
  query GetCandidatesByName(
    $type: String
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCandidatesByName(
      type: $type
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        name
        description
        votes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        channelID
        author
        group
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByChannelID = /* GraphQL */ `
  query MessagesByChannelID(
    $channelID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChannelID(
      channelID: $channelID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        channelID
        author
        group
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
