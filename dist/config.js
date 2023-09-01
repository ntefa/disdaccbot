"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const { DISCORD_BOT_TOKEN, CLIENT_ID, GUILD_ID } = process.env;
if (!CLIENT_ID || !GUILD_ID || !DISCORD_BOT_TOKEN) {
    throw new Error("Missing Environment Variables");
}
const config = {
    CLIENT_ID: CLIENT_ID,
    GUILD_ID: GUILD_ID,
    DISCORD_BOT_TOKEN: DISCORD_BOT_TOKEN,
};
exports.default = config;
