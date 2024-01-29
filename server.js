const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const bodyParser = require("body-parser");

//routes
const ticketRoutes = require("./routes/ticket");

// const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const app = express();

app.use(bodyParser.json({ extended: false }));

app.use("/ticket", ticketRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT || 3000);

    // console.log(result)
  })
  .catch((err) => console.log(err));
