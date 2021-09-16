import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PollType {
  IMAGE = "image",
  TEXT = "text"
}

export declare class VoteType {
  readonly id?: string;
  readonly clientId?: string;
  constructor(init: ModelInit<VoteType>);
}

type PollMetaData = {
  readOnlyFields: 'updatedAt';
}

type CandidateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields;
}

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

export declare class Poll {
  readonly id: string;
  readonly name: string;
  readonly type: PollType | keyof typeof PollType;
  readonly candidates?: (Candidate | null)[];
  readonly itemType?: string;
  readonly createdAt?: string;
  readonly owner?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Poll, PollMetaData>);
  static copyOf(source: Poll, mutator: (draft: MutableModel<Poll, PollMetaData>) => MutableModel<Poll, PollMetaData> | void): Poll;
}

export declare class Candidate {
  readonly id: string;
  readonly pollCandidatesId?: string;
  readonly candidateType: string;
  readonly name: string;
  readonly upvotes?: number;
  readonly owner?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Candidate, CandidateMetaData>);
  static copyOf(source: Candidate, mutator: (draft: MutableModel<Candidate, CandidateMetaData>) => MutableModel<Candidate, CandidateMetaData> | void): Candidate;
}

export declare class Message {
  readonly id: string;
  readonly channelID: string;
  readonly author: string;
  readonly body: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
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
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Questions, QuestionsMetaData>);
  static copyOf(source: Questions, mutator: (draft: MutableModel<Questions, QuestionsMetaData>) => MutableModel<Questions, QuestionsMetaData> | void): Questions;
}

export declare class QuestionsDB {
  readonly id: string;
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