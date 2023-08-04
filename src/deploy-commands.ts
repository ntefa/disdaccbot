const {SlashCommandBuilder} = require('discord.js');
const { REST, Routes } = require('discord.js');


require('dotenv').config(); // Load the .env file
// Access the token
const token = process.env.DISCORD_BOT_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;


const commands = [
    new SlashCommandBuilder().setName("ping").setDescription("replies with pong")
];

const rest= new REST({version : "9"}).setToken(token as string)

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();