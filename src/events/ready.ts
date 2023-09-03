import { Client } from "discord.js";

export function ready(client: Client) {
  // Execute this code once when the client is ready
  client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user?.tag}`);
  });
}