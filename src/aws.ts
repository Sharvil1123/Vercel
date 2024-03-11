import fs from "fs";
import { S3 } from "aws-sdk";


require("aws-sdk/lib/maintenance_mode_message").suppress= true;

const s3 = new S3({
  accessKeyId: "a15e4ff7159459f3722bd989844d7378",
  secretAccessKey:"2cff98ebc425c50e5f92dfadbb8f4042aeec87c6ba0f5d92dc3e6c90b4aa83e4",
  endpoint: "https://83ae6a046fbb74ba0a860706c6af3430.r2.cloudflarestorage.com",
});

export const uploadFile = async (fileName: string, localFilePath: string) => {
  const fileContent = fs.readFileSync(localFilePath);
  const response = await s3.upload({
      Body : fileContent,
      Bucket : "vercel",
      Key : fileName,
  }).promise();
  console.log(response);

//   const fileContent = fs.createReadStream(localFilePath);
//   const response = await s3
//     .upload({
//       Body: fileContent,
//       Bucket: "vercel-bucket",
//       Key: fileName,
//     })
//     .promise();

  console.log(response);
};
