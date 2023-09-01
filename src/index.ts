// import "./Bot"

// import { client } from "./Bot";

import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import * as fs from 'fs';
import * as path from 'path';
import { commands } from "./commands";


// const fs = require('node:fs');
// const path = require('node:path');
// const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
// import ready from "./listeners/ready";
// require('dotenv').config(); // Load the .env file
// // Access the token
// const token = process.env.DISCORD_BOT_TOKEN;

// console.log("Bot is starting...");
// const Bot = new Client({ intents: [GatewayIntentBits.Guilds] });

// Bot.commands = new Collection();


// // When the Bot is ready, run this code (only once)
// // We use 'c' for the event parameter to keep it separate from the already defined 'Bot'
// ready(Bot);

import { config } from 'dotenv';
config(); // Load the .env file

// Access the token
const token = process.env.DISCORD_BOT_TOKEN;
interface CustomClient extends Client {
    commands: Collection<string, any>; // Replace 'any' with the actual type of your commands
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] }) as CustomClient;
client.commands = new Collection();

// Create a new client instance
// const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Set a new item in the Collection with the key as the command name and the value as the exported module
if ('data' in commands.ping && 'execute' in commands.ping) {
    client.commands.set(commands.ping.data.name, commands.ping);
} else {
    console.log(`[WARNING] The command is missing a required "data" or "execute" property.`);
}



// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user?.tag}`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        } else {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
});

// Log in to Discord with your client's token
client.login(token);