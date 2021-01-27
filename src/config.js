const dev = {
  /* s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1taash9pf6q1f",
  },*/
  
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://qssh4niq5bgujocnsbpv2zg7am.appsync-api.us-east-1.amazonaws.com/graphql",
  }, 
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7DzzGN91J",
    APP_CLIENT_ID: "27galunsed5ne6m240i5h82km3",
    IDENTITY_POOL_ID: "us-east-1:741520ef-3bc3-4907-af04-ffdedec2028d",
  },
};

const prod = {
  /* STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1838t5x17uk5u",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.serverless-stack.seed-demo.club/prod",
  }, */
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://fu664xaaebafrhde7rycpwdesi.appsync-api.us-east-1.amazonaws.com/graphql",
  }, 
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_7DzzGN91J",
    APP_CLIENT_ID: "27galunsed5ne6m240i5h82km3",
    IDENTITY_POOL_ID: "us-east-1:741520ef-3bc3-4907-af04-ffdedec2028d",
  },
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "dev" ? prod : dev),
};

export default config;
