"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const config_1 = tslib_1.__importDefault(require("./config"));
const ready_1 = tslib_1.__importDefault(require("./listeners/ready"));
const interactionCreate_1 = tslib_1.__importDefault(require("./listeners/interactionCreate"));
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();
const token = process.env.DISCORD_BOT_TOKEN;
console.log("Bot is starting...");
exports.client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.DirectMessages]
});
(0, ready_1.default)(exports.client);
exports.client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    const { commandName } = interaction;
    if (commandName == "ping") {
        interaction.reply("pong");
        return;
    }
});
(0, interactionCreate_1.default)(exports.client);
exports.client.login(config_1.default.DISCORD_BOT_TOKEN);
