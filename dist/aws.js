"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const fs_1 = __importDefault(require("fs"));
const aws_sdk_1 = require("aws-sdk");
const s3 = new aws_sdk_1.S3({
    accessKeyId: "9df3479b2d467af57e35d7cb5c142a2f",
    secretAccessKey: "e4f2eca53696ddb158edf9e59a2888fc798992af5de232ac5e40f905925fd374",
    endpoint: "https://83ae6a046fbb74ba0a860706c6af3430.r2.cloudflarestorage.com",
});
const uploadFile = (fileName, localFilePath) => __awaiter(void 0, void 0, void 0, function* () {
    const fileContent = fs_1.default.readFileSync(localFilePath);
    const response = yield s3.upload({
        Body: fileContent,
        Bucket: "vercel-bucket",
        Key: fileName,
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
});
exports.uploadFile = uploadFile;
