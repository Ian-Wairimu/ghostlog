require("dotenv").config();

const MONGODB_URI = process.env.DATABASE_URL
const TOKEN_URL = process.env.VERCEL_URL
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
module.exports = {
    MONGODB_URI,
    TOKEN_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
}