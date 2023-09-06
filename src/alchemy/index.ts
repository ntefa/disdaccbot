import { getWebhooks } from "./getWebhooks";
import { getAddresses } from "./getAddresses";
import { addAddressToWebhook } from "./addAddress";
import { removeAddressFromWebhook } from "./removeAddress";

export const alchemyCommands = { 
    getWebhooks,
    addAddressToWebhook, 
    removeAddressFromWebhook,
    getAddresses
};

