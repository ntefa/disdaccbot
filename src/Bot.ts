import { Client, CommandInteraction, GatewayIntentBits } from "discord.js";
import config from "./config";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

// import interactionCreate from "./listeners/interactionCreate";
const fs = require('node:fs');
const path = require('node:path');


require('dotenv').config(); // Load the .env file
// Access the token
const token = process.env.DISCORD_BOT_TOKEN;

console.log("Bot is starting...");

export const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages]
});

ready(client);

client.on("interactionCreate",async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }
    const {commandName} = interaction;
    if (commandName == "ping") {
        interaction.reply("pong");
        return
    }
})
interactionCreate(client);


// client.on('interactionCreate', async (interaction) => {
//     const commandInteraction = interaction as CommandInteraction;
//     if (!commandInteraction.isCommand()) {
//       return;
//     }
  
//     if (commandInteraction.commandName === 'ping') {
//       await execute(commandInteraction, "pong");
//     }
//   });

// const execute = async (interaction: CommandInteraction, reply: string): Promise<void> => {
//     await interaction.reply(reply);
//   };


// interactionCreate(client);


client.login(config.DISCORD_BOT_TOKEN);

// console.log(client);