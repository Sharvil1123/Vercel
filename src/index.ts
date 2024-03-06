//accessid - 9df3479b2d467af57e35d7cb5c142a2f
//secret key - e4f2eca53696ddb158edf9e59a2888fc798992af5de232ac5e40f905925fd374
// url endpoint - https://83ae6a046fbb74ba0a860706c6af3430.r2.cloudflarestorage.com
import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import {generate} from "./utils" 
import { getAllFiles } from "./file";
import path from "path";
import {uploadFile} from "./aws";

const app = express();
app.use(cors())

// initialized an endpoint that the usr will hit and send the repo url as input
app.use(express.json())
app.post("/deploy",async (req, res) => {
    const repoUrl = req.body.repoUrl;
    const id = generate();  
    await simpleGit().clone(repoUrl,path.join(__dirname, `output/${id}`));

    const files = getAllFiles(path.join(__dirname, `output/${id}`));


// putt tthis to s3
    res.json({
        id: id
    })
})

app.listen(3000);

