const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;
const Bucket = process.env.S3_BUCKET;
const endpoint = process.env.S3_ENDPOINT;

const client_s3 = new S3Client({ 
    forcePathStyle: false,
    endpoint: endpoint,
    credentials: { 
        accessKeyId: accessKeyId, 
        secretAccessKey: secretAccessKey }, 
    region: region });

const getObjectSignedUrl = async (fileName) => {
    const input_s3 = {
      Bucket: Bucket,
      Key: fileName,
    }

    const command_s3 = new GetObjectCommand(input_s3);
    const seconds = 60;

    try {
        const response_s3 = await getSignedUrl(client_s3, command_s3, { expiresIn: seconds });
        return response_s3
    } catch (error) {
        throw error;
    }
}

module.exports = { getObjectSignedUrl };