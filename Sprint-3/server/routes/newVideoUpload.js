const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

readVideoFile = () =>{
    const fullData = fs.readFileSync("./data/video-details.json");
    const parsedData = JSON.parse(fullData);
    return parsedData;
}


router.post("/upload", (req, res)=>{
    const newUpload={
        id: req.body.id,
        title: req.body.title,
        channel: req.body.channel,
        description: req.body.description,
        views: req.body.views,
        likes: req.body.likes,
        duration: req.body.duration,
        video: req.body.video,
        timestamp: req.body.timestamp
    }
    console.log(newUpload);
    const uploads = readVideoFile();
    uploads.push(newUpload);
    fs.writeFileSync("./data/video-details.json", JSON.stringify(uploads));
    res.json(uploads);
    
})

module.exports = router;