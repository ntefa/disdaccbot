import { Alchemy } from "alchemy-sdk";

export async function getAddresses(
  alchemy: Alchemy,
  webhookId : string
) {
  try {

    const addressesById = await alchemy.notify.getAddresses(webhookId, {
      limit: 3,
    });
    const jsonString = JSON.stringify(addressesById, null, 2); // Convert JSON to a nicely formatted string
    return jsonString;
  } catch (error) {
    console.error("Error:", error);
  }
}