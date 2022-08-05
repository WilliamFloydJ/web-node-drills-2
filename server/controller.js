require("dotenv").config();

const Sequelize = require("sequelize");
const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getInfo: (req, res) => {
    sequelize
      .query(`select * from input;`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
  postInfo: (req, res) => {
    const { text } = req.body;

    sequelize
      .query(`insert into input(text) values('${text}');`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
};
