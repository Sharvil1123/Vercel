import express from "express";
import cors from "cors";

const app = express();
app.use(cors())

// initialized an endpoint that the usr will hit and send the repo url as input
app.use(express.json())
app.post("/delpoy",(req, res) => {
    const repoUrl = req.body.repoUrl;
    console.log(repoUrl);

    res.json({})
})

app.listen(3000);

