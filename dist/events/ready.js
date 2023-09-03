"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client) => {
    client.once('ready', () => {
        console.log(`Ready! Logged in as ${client.user?.tag}`);
    });
};
