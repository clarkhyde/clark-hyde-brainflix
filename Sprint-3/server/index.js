const express = require('express');
const app = express();
const PORT = 8080;
const cors = require("cors");
const videoRoute = require("./routes/videos");
const commentRoute = require("./routes/comments");


app.use(cors());

app.use(express.json());


app.use("/", videoRoute);
app.use("/", commentRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});