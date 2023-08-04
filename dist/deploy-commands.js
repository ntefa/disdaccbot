"use strict";
const { SlashCommandBuilder } = require('discord.js');
const { REST, Routes } = require('discord.js');
require('dotenv').config();
const token = process.env.DISCORD_BOT_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const commands = [
    new SlashCommandBuilder().setName("ping").setDescription("replies with pong")
];
const rest = new REST({ version: "9" }).setToken(token)(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        const data = await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    }
    catch (error) {
        console.error(error);
    }
})();
