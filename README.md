# disdaccbot

## Overview

This is a Discord bot project developed in TypeScript using the discord.js library. The bot is designed to integrate Alchemy notify webhooks, by enabling their updates. It is easy to extend and adapt its capabilities to different use cases. For example it is easy to add create/remove webhooks functionalities to the bot.

## Getting Started

### Prerequisites

Before you can run the bot, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (for package management)
- [Docker](https://www.docker.com/) (for containerization)
- Discord Bot Token (obtained by creating a bot on the [Discord Developer Portal](https://discord.com/developers/applications))
- Alchemy account and webhook already setup (https://docs.alchemy.com/docs/alchemy-notify) 

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
    DISCORD_BOT_TOKEN=your_bot_token
    CLIENT_ID=your client_id
    GUILD_ID=your guild_id
    ALCHEMY_TOKEN= your_alchemy_token


### Deployment

1. Run the following command in the project directory:

    ```bash
    docker build . -t bot 
    docker run bot


### Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are welcome!

### License
This project is licensed under the MIT License - see the LICENSE file for details.



