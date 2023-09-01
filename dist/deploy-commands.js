"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { CommandResponse } = require('discord.js');
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const commands_1 = require("./commands");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let token = process.env.DISCORD_BOT_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const commandsData = Object.values(commands_1.commands).map((command) => command.data);
const rest = new rest_1.REST().setToken(token);
(async () => {
    try {
        console.log(`Started refreshing ${commands_1.commands} application (/) commands.`);
        const data = await rest.put(v9_1.Routes.applicationGuildCommands(clientId, guildId), { body: commandsData });
        console.log(`Successfully reloaded application (/) commands.`);
    }
    catch (error) {
        console.error(error);
    }
})();
