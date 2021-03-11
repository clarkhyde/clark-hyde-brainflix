const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


readVideosFile = () =>{
    const videosData = fs.readFileSync("./data/video-details.json");
    const parsedData = JSON.parse(videosData);
    return parsedData;
}


router.get("/videos",(_req, res) =>{
    res.json(readVideosFile());
});

module.exports = router;