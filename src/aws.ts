import fs from "fs";
import {S3} from "aws-sdk";

const s3 = new S3({
    accessKeyId : "9df3479b2d467af57e35d7cb5c142a2f",
    secretAccessKey : "e4f2eca53696ddb158edf9e59a2888fc798992af5de232ac5e40f905925fd374",
    endpoint : "https://83ae6a046fbb74ba0a860706c6af3430.r2.cloudflarestorage.com"
})

export const uploadFile = async (fileName : string, localFilePath : string) => {
    console.log("called");
    const fileContent = fs.readFileSync(fileName);
    const response = await s3.upload({
        Body : fileContent,
        Bucket : "",
        Key : fileName,
    }).promise();
    console.log(response);
}