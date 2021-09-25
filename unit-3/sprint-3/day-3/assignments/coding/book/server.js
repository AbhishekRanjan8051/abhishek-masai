const express = require("express");

const app = express();

const users = require("./book.json");

app.use(express.json());

app.use(adding);


// listenong to PORT 

app.listen(2345, (req, res) => {
  console.log("listining on 2345");
});

// getting all book Details

app.get("/", (req, res) => {
  res.send(users);
});

// post the book details

app.post("/books", (req, res) => {
  res.send({
    name: "abhishek",
    age: 21,
  });
});

//get the book by ids

app.get("/books/:id", (req, res) => {
  let id = req.params.id;
   let book = users.filter((el) => {
    return el.id == id;
  });
  res.send(book);
});
// patch or update the book Details
app.patch("/books/:id", (req, res) => {
  let id = req.params.id;
   let book = users.filter((el) => {
    return el.id == id;
  });
  res.send(req.body);
});


// delete book

app.delete("/books/:id", (req, res) => {
  let id = req.params.id;
   let book = users.filter((el) => {
    return el.id == id;
  });
  res.send(req.body==[]);
});



function adding(req, res, next) {
  console.log("adding before");
  next();
}
