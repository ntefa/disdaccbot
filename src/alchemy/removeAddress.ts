import { Alchemy } from "alchemy-sdk";

export async function removeAddressFromWebhook(
  alchemy: Alchemy,
  webhookId: string,
  addressToRemove: string
) {
  try {
    await alchemy.notify.updateWebhook(webhookId, {
      removeAddresses: [addressToRemove],
    });
    console.log(`Removed address ${addressToRemove} from webhook id ${webhookId}`);
  } catch (error) {
    console.error("Error removing addresses from webhook:", error);
  }
}
