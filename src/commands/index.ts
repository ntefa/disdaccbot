import * as ping from "./ping"
import * as users from "./users"
import * as server from "./server"
import * as getWebhooks from "./webhook/getWebhooks"
import * as modifyWebhook from "./webhook/modifyWebhook"
import * as getAddresses from "./webhook/getAddresses"


export const commands = {
  ping,
  users,
  server,
  getWebhooks,
  modifyWebhook,
  getAddresses
};