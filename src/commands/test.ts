import { SlashCommandBuilder, CommandInteraction } from 'discord.js';

export const data= new SlashCommandBuilder()
.setName('test')
.setDescription('Provides information about the user.')
.addStringOption(option =>
    option
        .setName('reason')
        .setDescription('The reason for banning'))

export async function execute(interaction: CommandInteraction) {
    // const target = interaction.options.getUser('target');
    const reasonOption = interaction.options.get('reason');
    const reason = reasonOption ? reasonOption.value : 'No reason provided';
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(`reason: ${reason}`);
}
