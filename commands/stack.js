const { MessageActionRow, MessageEmbed, MessageSelectMenu } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stack')
        .setDescription('Replies with suggested stackoverflow threads.'),
    async execute(inter) {
        const query = "spread operator in javascript";
        const row = new MessageActionRow()
            .addComponents(
              new MessageSelectMenu()
                .setCustomId("select")
                .setPlaceholder("Nothing selected")
                .addOptions([
                  {
                    label: "title 1",
                    description: "desc 1",
                    value: "first",
                  },
                  {
                    label: "title 2",
                    description: "desc 2",
                    value: "second",
                  },
                ]),
            );

      const embed = new MessageEmbed()
            .setColor("#f2740d")
            .setTitle("result chosen")
            .setURL("https://viso.to")
            .setDescription("some description");

      await inter.reply({ content: `StackOverflow results for "${query}":`, embeds: [embed], components: [row] });
    },
};
