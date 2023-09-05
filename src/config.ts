require('dotenv').config(); // Load the .env file

const {DISCORD_BOT_TOKEN,CLIENT_ID, GUILD_ID, ALCHEMY_TOKEN} = process.env;

if (!CLIENT_ID || !GUILD_ID || !DISCORD_BOT_TOKEN || !ALCHEMY_TOKEN) {
    throw new Error("Missing Environment Variables")
}

const config : Record<string,string> = {
    CLIENT_ID : CLIENT_ID!,
    GUILD_ID : GUILD_ID!,
    DISCORD_BOT_TOKEN: DISCORD_BOT_TOKEN!,
    ALCHEMY_TOKEN: ALCHEMY_TOKEN

}

export default config