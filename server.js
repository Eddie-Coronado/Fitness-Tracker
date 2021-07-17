const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const routes = require('./routes/api-routes');


const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const database = require("./config/keys").mongoURI;

mongoose
  .connect(
    database,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// app.use(routes)
app.use(require('./routes/api-routes.js'));
app.use(require('./routes/html-routes.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});