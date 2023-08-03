import { Client } from "discord.js";

require('dotenv').config(); // Load the .env file
// Access the token
const token = process.env.DISCORD_BOT_TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

console.log(client);