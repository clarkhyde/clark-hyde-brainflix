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
    const {id, title, channel, image, description, views, likes, duration, video,timestamp, comments} = req.body;
    console.log(req.body);
    //need to read file, then add what we got from this to that file.
    
})

module.exports = router;