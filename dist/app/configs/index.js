"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
require("dotenv/config");
exports.configs = {
    port: process.env.PORT,
    env: process.env.NODE_ENV || "development",
    jwt: {
        access_token: process.env.ACCESS_TOKEN,
        refresh_token: process.env.REFRESH_TOKEN,
        access_expires: process.env.ACCESS_EXPIRES,
        refresh_expires: process.env.REFRESH_EXPIRES,
        reset_secret: process.env.RESET_SECRET,
        reset_expires: process.env.RESET_EXPIRES,
        front_end_url: process.env.FRONT_END_URL || process.env.RESET_BASE_LINK,
        verified_token: process.env.VERIFIED_TOKEN || process.env.ACCESS_TOKEN
    },
    db_url: process.env.DB_URL,
    email: {
        app_email: process.env.APP_USER_EMAIL || process.env.APP_USER,
        app_password: process.env.APP_PASSWORD
    },
    cloudinary: {
        cloud_name: process.env.CLOUD_NAME,
        cloud_api_key: process.env.CLOUD_API_KEY,
        cloud_api_secret: process.env.CLOUD_API_SECRET
    }
};
