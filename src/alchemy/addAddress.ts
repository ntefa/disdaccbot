import { Alchemy } from "alchemy-sdk";

export async function addAddressToWebhook(
  alchemy: Alchemy,
  webhookId: string,
  addressToAdd: string
) {
  try {
    await alchemy.notify.updateWebhook(webhookId, {
      addAddresses: [addressToAdd],
    });
    console.log(`Added address to webhook: ${addressToAdd}`);
  } catch (error) {
    console.error("Error adding addresses to webhook:", error);
  }
}
