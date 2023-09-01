"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const commands_1 = require("./commands");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const token = process.env.DISCORD_BOT_TOKEN;
const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
client.commands = new discord_js_1.Collection();
if ('data' in commands_1.commands.ping && 'execute' in commands_1.commands.ping) {
    client.commands.set(commands_1.commands.ping.data.name, commands_1.commands.ping);
}
else {
    console.log(`[WARNING] The command is missing a required "data" or "execute" property.`);
}
client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user?.tag}`);
});
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand())
        return;
    const command = client.commands.get(interaction.commandName);
    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }
    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        }
        else {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
});
client.login(token);
