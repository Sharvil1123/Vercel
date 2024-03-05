import express from "express";
import cors from "cors";
import simpleGit from "simple-git";
import {generate} from "./utils" 


const app = express();
app.use(cors())

// initialized an endpoint that the usr will hit and send the repo url as input
app.use(express.json())
app.post("/deploy",async (req, res) => {
    const repoUrl = req.body.repoUrl;
    const id = generate();  
    await simpleGit().clone(repoUrl,`output/${id}`)
// putt tthis to s3
    res.json({
        id: id
    })
})

app.listen(3000);

