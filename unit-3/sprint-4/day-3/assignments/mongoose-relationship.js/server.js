const express = require("express");

const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(" mongodb://127.0.0.1:27017/library");
};

const app = express();

app.use(express.json());

const librarySchema = new mongoose.Schema(
  {
    id: { type: Number, require: true },
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    gender: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// create collection of user and coonect to mongoose
const User = mongoose.model("user", librarySchema);

// create schema for Book Section

const sectionSchema = new mongoose.Schema(
  {
    section_name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// connection schema for section collections
const Section = mongoose.model("section", sectionSchema);

// create schema for books

const bookSchema = new mongoose.Schema(
  {
    book_name: { type: String, required: true },
    body: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// connecting schema for book collection
const Book = mongoose.model("book", bookSchema);

//Create schema Author
const authorSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// connection to author schema

const Author = mongoose.model("author", authorSchema);


//create schema for checkout
const checkoutSchema = new mongoose.Schema(
  {
    checkout_time: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// connection to checkout schema

const Checkout = mongoose.model("check", checkoutSchema);

//----------------------------CRUD API for user------------------------------------


//post
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  return res.status(200).send({ user });
});


//get user
app.get("/users", async (req, res) => {
  const users = await User.find().lean().exec();

  return res.status(200).send({ users });
});

//----------------------------CRUD API for Section--------------------------------

//posts
app.post("/sections", async (req, res) => {
  const section = await Section.create(req.body);
  return res.status(201).send({ section });
});


///get section
app.get("/sections", async (req, res) => {
  const sections = await Section.find().lean().exec();

  return res.status(200).send({ sections });
});

//----------------------------CRUD API for books------------------------------

//posts books
app.post("/books", async (req, res) => {
  const book = await Book.create(req.body);

  return res.status(201).send({ book });
});


//get book
app.get("/books", async (req, res) => {
  const books = await Book.find().lean().exec();
  // const author = await Author.find.populate("author").lean.exec();

  return res.status(200).send({ books });
});


//get books by id or single book
app.get("/books/:id", async (req, res) => {
  const books = await Book.findOne(req.params.id).lean.exec();
  return res.status(200).send({ books });
});

//-------------------------CRUD API for author------------------------


//post author
app.post("/authors", async (req, res) => {
  const author = await Author.create(req.body);
  return res.status(201).send({ author });
});


// get author
app.get("/authors", async (req, res) => {
  const authors = await Author.find().lean().exec();

  return res.status(200).send({ authors });
});


//-------------------------CRUD API for checkout------------------------


//post checkout
app.post("/checkouts", async (req, res) => {
  const checkout = await Checkout.create(req.body);
  return res.status(201).send({ checkout });
});


///get checkouts
app.get("/checkouts", async (req, res) => {
  const checkouts = await Checkout.find().lean().exec();

  return res.status(200).send({ checkouts });
});


// /listening server on port
app.listen(2346, async function () {
  await connect();
  console.log("Listening to port 2346");
});
