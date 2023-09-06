import { SlashCommandBuilder, CommandInteraction } from 'discord.js';
import { Alchemy, Network } from "alchemy-sdk";
import { alchemyCommands } from "../../alchemy"

// https://dashboard.alchemy.com/notify.
const settings = {
    authToken: process.env.ALCHEMY_TOKEN as string, // Make sure to replace 'string' with the correct type of your ALCHEMY_TOKEN.
    network: Network.ETH_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy(settings);

export const data = new SlashCommandBuilder()
    .setName('getwebhooks')
    .setDescription('Provides list of available webhooks.');

export async function execute(interaction: CommandInteraction) {

    const jsonString = await alchemyCommands.getWebhooks(alchemy)
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(`Your current webhooks are: ${jsonString}`);
}
