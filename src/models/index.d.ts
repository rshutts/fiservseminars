import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type QuizMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionsDBMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubscribersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResponsesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LanguagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Quiz {
  readonly id: string;
  readonly title: string;
  readonly seconds: number;
  readonly currentQuestion?: string;
  readonly questionOrder?: string;
  readonly started?: boolean;
  readonly questionTime?: number;
  readonly view?: number;
  readonly owner: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Quiz, QuizMetaData>);
  static copyOf(source: Quiz, mutator: (draft: MutableModel<Quiz, QuizMetaData>) => MutableModel<Quiz, QuizMetaData> | void): Quiz;
}

export declare class Questions {
  readonly id: string;
  readonly image?: string;
  readonly imageFromS3?: boolean;
  readonly youtube?: string;
  readonly question: string;
  readonly answerOne?: string;
  readonly answerOneCorrect?: boolean;
  readonly answerTwo?: string;
  readonly answerTwoCorrect?: boolean;
  readonly answerThree?: string;
  readonly answerThreeCorrect?: boolean;
  readonly answerFour?: string;
  readonly answerFourCorrect?: boolean;
  readonly quizID: string;
  readonly order?: number;
  readonly public?: boolean;
  readonly fromLibrary?: boolean;
  readonly category?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Questions, QuestionsMetaData>);
  static copyOf(source: Questions, mutator: (draft: MutableModel<Questions, QuestionsMetaData>) => MutableModel<Questions, QuestionsMetaData> | void): Questions;
}

export declare class QuestionsDB {
  readonly id: string;
  readonly image?: string;
  readonly imageFromS3?: boolean;
  readonly youtube?: string;
  readonly question: string;
  readonly answerOne?: string;
  readonly answerOneCorrect?: boolean;
  readonly answerTwo?: string;
  readonly answerTwoCorrect?: boolean;
  readonly answerThree?: string;
  readonly answerThreeCorrect?: boolean;
  readonly answerFour?: string;
  readonly answerFourCorrect?: boolean;
  readonly relatedQuestion: string;
  readonly public?: boolean;
  readonly category?: string;
  readonly language?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<QuestionsDB, QuestionsDBMetaData>);
  static copyOf(source: QuestionsDB, mutator: (draft: MutableModel<QuestionsDB, QuestionsDBMetaData>) => MutableModel<QuestionsDB, QuestionsDBMetaData> | void): QuestionsDB;
}

export declare class Subscribers {
  readonly id: string;
  readonly type: string;
  readonly score: number;
  readonly quizID: string;
  readonly name: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Subscribers, SubscribersMetaData>);
  static copyOf(source: Subscribers, mutator: (draft: MutableModel<Subscribers, SubscribersMetaData>) => MutableModel<Subscribers, SubscribersMetaData> | void): Subscribers;
}

export declare class Responses {
  readonly id: string;
  readonly quiz: string;
  readonly subscriber: string;
  readonly question: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Responses, ResponsesMetaData>);
  static copyOf(source: Responses, mutator: (draft: MutableModel<Responses, ResponsesMetaData>) => MutableModel<Responses, ResponsesMetaData> | void): Responses;
}

export declare class Languages {
  readonly id: string;
  readonly type: string;
  readonly code: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Languages, LanguagesMetaData>);
  static copyOf(source: Languages, mutator: (draft: MutableModel<Languages, LanguagesMetaData>) => MutableModel<Languages, LanguagesMetaData> | void): Languages;
}