const express = require("express");

// const mongoose = require("mongoose");

const connect = require("./configs/db.js");

const userController = require("./controller/user.controller.js");

const postController = require("./controller/post.controller.js");

const commentController = require("./controller/comment.controller.js");

const tagController = require("./controller/tag.controller.js");

//--------------------

const app = express();

app.use(express.json());

app.use("/users", userController);

app.use("/posts", postController);

app.use("/comments", commentController);

app.use("/tags", tagController);



//listening api on port
app.listen(2346, async function () {
  await connect();
  console.log("listining on 2346");
});
