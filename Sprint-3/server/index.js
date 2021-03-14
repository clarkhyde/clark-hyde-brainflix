const express = require('express');
const app = express();
const PORT = 8080;
const cors = require("cors");
const videoRoute = require("./routes/videos");
const commentRoute = require("./routes/comments");
const uploadRoute = require("./routes/newVideoUpload");
const deleteCommentRoute = require("./routes/deleteCommentRoute");

app.use(cors());
app.use(express.json());


app.use("/", videoRoute);
app.use("/", commentRoute);
app.use("/", uploadRoute);
app.use("/", deleteCommentRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});