// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PollType = {
  "IMAGE": "image",
  "TEXT": "text"
};

const { Poll, Candidate, Message, Quiz, Questions, QuestionsDB, Subscribers, Responses, VoteType } = initSchema(schema);

export {
  Poll,
  Candidate,
  Message,
  Quiz,
  Questions,
  QuestionsDB,
  Subscribers,
  Responses,
  PollType,
  VoteType
};