const config = {
    "aws_project_region": "us-east-1",

    /*Cognito*/
    "aws_cognito_identity_pool_id": "us-east-1:d5981869-2e43-4830-882f-36f4742f4ef1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_9NBO8j4CN",
    "aws_user_pools_client_id": "7hvjh3o427hj2ei4gc6aaf6r5b",

    /*Chat API*/
    "aws_appsync_graphqlEndpoint": "https://b7b6t7c7kncvdboppzyik23mp4.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    'aws_appsync_apiKey': 'da2-3fhjugoll5ai7fgxbox5dn7wbm',

    /*S3*/
    "aws_s3_bucket": "seminar-profile-photos",
    "aws_s3_bucket_region": "us-east-1"
};


export default config;