const express = require("express");
const router = express.Router();
const fs = require("fs");

getSelectedVideo = (id) =>{
    let parsedData = readVideoFile();
    let newData = parsedData.filter(video => video.id === id);
    return newData;
}

readVideoFile = () =>{
    const fullData = fs.readFileSync("./data/video-details.json");
    const parsedData = JSON.parse(fullData);
    return parsedData;
}



router.post("/videos/:videoId/likes",(req, res)=>{
    console.log(req.body.id);
    const newLikeId =req.body.id; 
    let parsedData=getSelectedVideo(newLikeId);
    let newLikes = parsedData[0].likes.replace(",","");
    let newLikesNumber = Number(newLikes)+1;
    parsedData[0].likes = newLikesNumber.toLocaleString();
    //console.log(parsedData);

    let newArr = readVideoFile();
    let filteredArr = newArr.filter(video =>video.id !== newLikeId);
    filteredArr.push(parsedData[0]);
    console.log(filteredArr);
    fs.writeFileSync("./data/video-details.json", JSON.stringify(filteredArr, null, 2));
    res.json(parsedData);
})



module.exports = router;