import AWS from 'aws-sdk'
import fs from 'fs';
export async function downloadFormS3(fileKey:string){
    try {
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
        });
        const s3 = new AWS.S3({
        params: { Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME },
        region: 'ap-southeast-1',
    });
    const params = {
        Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
        Key: fileKey,
    };

    const obj = await s3.getObject(params).promise();
    const file_name = `/temp/pdf-${Date.now()}.pdf`;
    fs.writeFileSync(file_name, obj.Body as Buffer);    
    return file_name;
    } catch (error) {
        console.log(error);
        return null;
    }
}