const express = require("express");
const router = express.Router();
const fs = require("fs");


readVideoFile = () =>{
    const fullData = fs.readFileSync("./data/video-details.json");
    const parsedData = JSON.parse(fullData);
    return parsedData;
}

 editVideoFile = (vidEdit,videoId) =>{
     let parsedData = readVideoFile();
    let newVideoArr =parsedData.filter(video => video.id !== videoId);
    newVideoArr.push(vidEdit[0]);
   fs.writeFileSync("./data/video-details.json", JSON.stringify(newVideoArr, null, 2));
 }

deleteSelectectedComment = (videoId,commentId)=>{
    let parsedData = readVideoFile();
    const selectedVideo = parsedData.filter(video => video.id === videoId);
    selectedVideo[0].comments = selectedVideo[0].comments.filter(comment => comment.id !== commentId);
    return selectedVideo;
}

router.delete("/videos/:videoId/comments/:commentId",(req, res)=>{
    const videoId = req.params.videoId;
    const commentId = req.params.commentId;
    let vidEdit = deleteSelectectedComment(videoId,commentId);
    editVideoFile(vidEdit,videoId);
    const newArr = readVideoFile();
    let updatedVid = newArr.filter(video => video.id === videoId);
    console.log(updatedVid);
    res.json(updatedVid[0]);
})

module.exports = router;