import 'dotenv/config'
import * as AWS from 'aws-sdk';
export async function uploadFileToS3(file: File) {
    try {
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        });
        const s3 = new AWS.S3({
            region: 'ap-south-1'
        });

        const file_key = 'uploads/' + Date.now().toString() + file.name.replace(' ', '-');

        const params = {
            Bucket: `${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}`,
            Key: file_key,
            Body: file,
        };

        const upload = s3.putObject(params).on('httpUploadProgress', evt => {
            console.log('Upload progress:', parseInt(((evt.loaded * 100) / evt.total).toString()) + '%');
        }).promise();

        const data = await upload;

        console.log(`Upload success: ${(data).toString()} and file: ${file_key}`);

        return Promise.resolve({ file_key, file_name: file.name });

    } catch (error) {
        console.error('Error uploading to S3:', error);
        return Promise.reject(error);
    }
}

export function getS3Url(file_key: string) {
    const url = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.ap-south-1.amazonaws.com/${file_key}`;
    return url;
}