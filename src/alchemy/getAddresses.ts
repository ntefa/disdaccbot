import { Alchemy } from "alchemy-sdk";

export async function addAddressToWebhook(
  alchemy: Alchemy,
  webhookId: string,
  addressToAdd: string
) {
  const addressesById = await alchemy.notify.getAddresses(webhookId, {
  });
}
