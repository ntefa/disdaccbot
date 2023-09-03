import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { commands } from "./commands";
import { config } from 'dotenv';

// Load the .env file
config();

// Access the token
let token = process.env.DISCORD_BOT_TOKEN!;
const clientId = process.env.CLIENT_ID!;
const guildId = process.env.GUILD_ID!;

// Extract the 'data' property from each command in the 'commands' collection
const commandsData = Object.values(commands).map((command) => command.data);

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// Deploy your commands
(async () => {
  try {
    console.log(`Started refreshing application (/) commands.`);

    // Use the put method to refresh all commands in the guild with the current set
    const data  = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commandsData },
    );

    console.log(`Successfully reloaded application (/) commands.`);
  } catch (error) {
    // Handle and log any errors that occur during deployment
    console.error(error);
  }
})();
