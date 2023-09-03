import { Interaction } from "discord.js";
import { CustomClient } from "../interfaces/client";

export default async (client: CustomClient) => {
  // Listen for interactions
  client.on('interactionCreate', async (interaction: Interaction) => {
    // Check if the interaction is a command
    if (!interaction.isCommand()) return;

    // Get the command associated with the interaction
    const command = client.commands.get(interaction.commandName);

    // If no matching command is found, log an error and return
    if (!command) {
      console.error(`No command matching ${interaction.commandName} was found.`);
      return;
    }

    try {
      // Execute the command
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      
      // Check if the interaction was already replied to or deferred
      if (interaction.replied || interaction.deferred) {
        // Send an ephemeral follow-up message in case of an error
        await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
      } else {
        // Reply with an ephemeral message in case of an error
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
  });
};
