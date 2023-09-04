# disdaccbot

## Overview

This is a Discord bot project developed in TypeScript using the discord.js library. The bot is designed to perform various actions within a Discord server, such as responding to commands, managing server-related tasks, and interacting with users.

## Getting Started

### Prerequisites

Before you can run the bot, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (for package management)
- [Docker](https://www.docker.com/) (optional, for containerization)
- Discord Bot Token (obtained by creating a bot on the [Discord Developer Portal](https://discord.com/developers/applications))

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/discord-bot.git

2. Navigate to the project directory:
    ```bash
    cd discord-bot

3. Install project dependencies using Yarn:

    ```bash
    yarn install

4. Create a .env file in the project root and add your Discord Bot Token:

    ```bash
    DISCORD_BOT_TOKEN=your_bot_token_here
    CLIENT_ID=your client_id
    GUILD_ID=your guild_id

### Deployment

 Run the following command in the project directory:

    ```bash
    Copy code
    docker build -t discord-bot .
    docker run --name my_discord_bot -d discord-bot
    ```


### Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are welcome!

### License
This project is licensed under the MIT License - see the LICENSE file for details.



