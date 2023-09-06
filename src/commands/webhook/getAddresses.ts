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
    .setName('getaddresses')
    .setDescription('Provides list of addresses monitored for the specific webhook.')
    .addStringOption(option =>
        option
            .setName('webhookid')
            .setDescription('this is the webhook id')
            .setRequired(true)
    );

export async function execute(interaction: CommandInteraction) {

    const webhookIdOption = interaction.options.get('webhookid');
    const webhookId = webhookIdOption?.value as string | undefined;

    if (typeof webhookId !== 'string') {
        return interaction.reply('Invalid webhookId provided');
    }
    const jsonString = await alchemyCommands.getAddresses(alchemy, webhookId)

    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(`Your current addresses for webhook ${webhookId} are: ${jsonString}`);
}
