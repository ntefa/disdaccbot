import { Client, Collection, GatewayIntentBits } from 'discord.js';
import ready from "./events/ready";
import onInteraction from "./events/onInteraction";
import { CustomClient } from "./interfaces/client";
import { commands } from "./commands";
import { config } from 'dotenv';

// Load the .env file
config();

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
ready(client);
onInteraction(client);

// Log in to Discord with your client's token
client.login(token);
