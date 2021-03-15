const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.use('/', express.static('public'));

readVideoFile = () =>{
    const fullData = fs.readFileSync("./data/video-details.json");
    const parsedData = JSON.parse(fullData);
    return parsedData;
}


router.post("/upload", (req, res)=>{
    const newUpload={
        id: uuidv4(),
        title: req.body.title,
        channel: req.body.channel,
        image: `http://localhost:8080/images/image1.jpg`,
        description: req.body.description,
        views: req.body.views,
        likes: req.body.likes,
        duration: req.body.duration,
        video: req.body.video,
        timestamp: req.body.timestamp,
        comments: req.body.comments
    }
    const uploads = readVideoFile();
    uploads.push(newUpload);
    fs.writeFileSync("./data/video-details.json", JSON.stringify(uploads, null, 2));
    res.json(uploads);
    
})

module.exports = router;