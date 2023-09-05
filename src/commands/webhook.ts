import { SlashCommandBuilder, CommandInteraction } from 'discord.js';
import { Alchemy, Network } from "alchemy-sdk";
import { alchemyCommands } from "../alchemy"

// https://dashboard.alchemy.com/notify.
const settings = {
    authToken: process.env.ALCHEMY_TOKEN as string, // Make sure to replace 'string' with the correct type of your ALCHEMY_TOKEN.
    network: Network.ETH_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy(settings);

export const data = new SlashCommandBuilder()
    .setName('webhook')
    .setDescription('Provides information about the user.')
    .addStringOption(option =>
        option
            .setName('operation')
            .setDescription('operation to perform')
            .setRequired(true)
            .addChoices(
                { name: 'AddAddress', value: 'AddAddress' },
                { name: 'RemoveAddress', value: 'RemoveAddress' },
            ))
    .addStringOption(option =>
        option
            .setName('webhookid')
            .setDescription('this is the webhook id')
            .setRequired(true)
    )
    .addStringOption(option =>
        option
            .setName('address')
            .setDescription('address to add/remove')
            .setRequired(true)
    )
    ;

export async function execute(interaction: CommandInteraction) {
    const operationOption = interaction.options.get('operation');
    const operation = operationOption ? operationOption.value : 'No reason provided';

    const webhookIdOption = interaction.options.get('webhookid');
    const webhookId = webhookIdOption?.value as string | undefined;

    if (typeof webhookId !== 'string') {
        return interaction.reply('Invalid webhookId provided');
      }
      
    const addressOption = interaction.options.get('address');
    const address = addressOption ?.value as string | undefined;

    if (typeof address !== 'string') {
        return interaction.reply('Invalid address provided');
      }
    
    switch (operation) {
        case "AddAddress":

            // Handle the "AddAddress" case here
            console.log("Adding address...");
            // Call a function or perform actions specific to "AddAddress"
            alchemyCommands.addAddressToWebhook(alchemy,webhookId,address)
            return interaction.reply('Address added!');


        case "RemoveAddress":
            // Handle the "RemoveAddress" case here
            console.log("Removing address...");
            // Call a function or perform actions specific to "RemoveAddress"
            alchemyCommands.removeAddressFromWebhook(alchemy,webhookId,address)
            return interaction.reply('Address removed!');

        default:
            // Handle a default case if the option doesn't match any of the cases
            console.log("Invalid option.");
            break;
    }


    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(`operation: ${operation}`);
}
