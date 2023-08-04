"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onInteraction = void 0;
const commandList_1 = require("../commands/commandList");
const onInteraction = async (interaction) => {
    if (interaction.isCommand()) {
        for (const Command of commandList_1.CommandList) {
            if (interaction.commandName === Command.data.name) {
                await Command.run(interaction);
                break;
            }
        }
    }
};
exports.onInteraction = onInteraction;
