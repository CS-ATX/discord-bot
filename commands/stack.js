const { MessageActionRow, MessageEmbed, MessageSelectMenu } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("stack")
        .setDescription("Replies with suggested stackoverflow threads.")
        .addStringOption(option =>
          option.setName("query")
                .setDescription("The query sent to StackOverflow")
                .setRequired(true)),

    async execute(inter) {
        console.log(inter);
        const query = inter.options.getString("query", true);

        const row = new MessageActionRow()
            .addComponents(
              new MessageSelectMenu()
                .setCustomId("select")
                .setPlaceholder("Select a result")
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

      await inter.reply({ content: `StackOverflow results for: \`${query}\``, components: [row] });
    },
};
