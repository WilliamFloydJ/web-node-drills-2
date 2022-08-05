require("dotenv").config();

const chalk = require("chalk");
const morgan = require("morgan");
const debug = require("debug")("app");

const express = require("express");
const app = express();
app.use(express.json());
app.use(morgan("short"));

const cors = require("cors");
app.use(cors());

const port = process.env.PORT;

const { getInfo, postInfo } = require("./controller");

app.get("/api/info", getInfo);
app.post("/api/info", postInfo);

app.listen(port, () => {
  debug(chalk.blue(`listening on port ${port}`));
});
