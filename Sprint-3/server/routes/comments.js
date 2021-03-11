const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

readVideoFile = () =>{
    const fullData = fs.readFileSync("./data/video-details.json");
    const parsedData = JSON.parse(fullData);
    return parsedData;
}

getSelectedVideo = (id) =>{
    let parsedData = readVideoFile();
    let newData = parsedData.filter(video => video.id === id);
    console.log(newData);
    return newData;
}




router.get("/videos/:videoId", (req, res) =>{
    const id = req.params.videoId;
    console.log(id);

    res.json(getSelectedVideo(id));
});

module.exports = router;