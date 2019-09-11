require('dotenv').config();

const {
  APP_PORT,
  MONGO_URL
} = process.env;

module.exports = {
  APP_PORT: Number(APP_PORT),
  MONGO_URL
};
