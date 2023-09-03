"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
const tslib_1 = require("tslib");
const ping = tslib_1.__importStar(require("./ping"));
const users = tslib_1.__importStar(require("./users"));
const server = tslib_1.__importStar(require("./server"));
exports.commands = {
    ping,
    users,
    server,
};
