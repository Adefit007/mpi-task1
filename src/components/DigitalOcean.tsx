import AWS from "aws-sdk";

const REACT_APP_S3_BUCKET_ENDPOINT = new AWS.Endpoint(
  "sgp1.digitaloceanspaces.com"
);
const s3 = new AWS.S3({
  endpoint: REACT_APP_S3_BUCKET_ENDPOINT,
  accessKeyId: process.env.REACT_APP_S3_BUCKET_KEY,
  secretAccessKey: process.env.REACT_APP_S3_BUCKET_SECRET,
});
export default s3;
