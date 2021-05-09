const express = require("express");
// set up mongoose to connect when starting the app
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

// set up mongoose to connect to mongoDB here
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/noSQL-socialmedia",
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// Use this to log mongo queries being executed!
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
