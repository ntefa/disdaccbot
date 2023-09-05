
import { config } from 'dotenv';
// Load the .env file
config();

// Import other libraries after config so that variables are set
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { events } from "./events";
import { CustomClient } from "./interfaces/client";
import { commands } from "./commands";

// Access the token
const token = process.env.DISCORD_BOT_TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] }) as CustomClient;
client.commands = new Collection();

// Initialize the command collection
for (let commandName in commands) {
  let index = commandName as keyof typeof commands;
  let command = commands[index];
  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(`[WARNING] The command '${commandName}' is missing a required "data" or "execute" property.`);
  }
}

// Register ready and interaction event handlers
events.ready(client);
events.onInteraction(client)
// Log in to Discord with your client's token
client.login(token);


