"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const ready_1 = tslib_1.__importDefault(require("./events/ready"));
const onInteraction_1 = tslib_1.__importDefault(require("./events/onInteraction"));
const commands_1 = require("./commands");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const token = process.env.DISCORD_BOT_TOKEN;
const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
client.commands = new discord_js_1.Collection();
for (let commandName in commands_1.commands) {
    let index = commandName;
    let command = commands_1.commands[index];
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    }
    else {
        console.log(`[WARNING] The command '${commandName}' is missing a required "data" or "execute" property.`);
    }
}
(0, ready_1.default)(client);
(0, onInteraction_1.default)(client);
client.login(token);
