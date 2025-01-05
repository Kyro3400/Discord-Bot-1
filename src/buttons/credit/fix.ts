import Button from "../../classes/Button";
import ExtendedClient from "../../classes/ExtendedClient";
import { ButtonInteraction, MessageFlags } from "discord.js";

import { emojis as emoji } from "../../config";

const button: Button = {
    name: "credit-fix",
    startsWith: true,
    requiredRoles: ["donator"],
    async execute(interaction: ButtonInteraction, client: ExtendedClient, Discord: typeof import("discord.js")) {
        try {
            const user = interaction.customId.replace("credit-fix-", "");

            if(user !== interaction.user.id) {
                const error = new Discord.EmbedBuilder()
                    .setColor(client.config_embeds.error)
                    .setDescription(`${emoji.cross} You cannot fix another user's credit amount!`)

                await interaction.reply({ embeds: [error], flags: MessageFlags.Ephemeral });
                return;
            }

            const oldData = await client.credit.get(user);
            const newCount = await client.credit.fix(user);

            if(oldData.used === newCount) {
                const error = new Discord.EmbedBuilder()
                    .setColor(client.config_embeds.default)
                    .setDescription(`${emoji.tick} Your credit amount is correct!`)

                await interaction.reply({ embeds: [error], flags: MessageFlags.Ephemeral });
                return;
            }

            const fixed = new Discord.EmbedBuilder()
                .setColor(client.config_embeds.default)
                .setDescription(`${emoji.tick} Your credit amount has been fixed!`)

            await interaction.reply({ embeds: [fixed], flags: MessageFlags.Ephemeral });
        } catch(err) {
            client.logButtonError(err, interaction);
        }
    }
}

export = button;
