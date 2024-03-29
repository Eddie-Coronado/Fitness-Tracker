// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// // const routes = require('./routes/api-routes');


// const PORT = process.env.PORT || 3000;

// const app = express();
// app.use(logger("dev"));


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));


// // mongoose.connect("mongodb://localhost/fitness-Tracker", { 
// //   useNewUrlParser: true,
// //   useFindAndModify: false,
// //   useUnifiedTopology: true,
// // })

// const database = require("./config/keys").mongoURI;

// mongoose
//   .connect(
//     database,
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// // app.use(routes)
// app.use(require('./routes/api-routes.js'));
// app.use(require('./routes/html-routes.js'));

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}/ \n`);
});