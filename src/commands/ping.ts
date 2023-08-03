import { SlashCommandBuilder, CommandInteraction} from 'discord.js';

const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with Pong!');

  
const execute = async (interaction: CommandInteraction): Promise<void> => {
    await interaction.reply('Pong!');
  };

export default {
  data,
  execute,
};
