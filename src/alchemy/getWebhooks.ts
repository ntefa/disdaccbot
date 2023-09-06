import { Alchemy } from "alchemy-sdk";

export async function getWebhooks(
  alchemy: Alchemy,
) {
  try {
    const webhooks = await alchemy.notify.getAllWebhooks();
    const jsonString = JSON.stringify(webhooks, null, 2); // Convert JSON to a nicely formatted string
    return jsonString;
  } catch (error) {
    console.error("Error:", error);
  }
}
