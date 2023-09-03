import { Client, Collection, GatewayIntentBits } from 'discord.js';

export interface CustomClient extends Client {
  commands: Collection<string, any>; // Replace 'any' with the actual type of your commands
}
