require("dotenv").config();

const MONGODB_URI = process.env.DATABASE_URL

module.exports = {
    MONGODB_URI
}