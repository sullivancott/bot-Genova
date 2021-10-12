const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `carte`
    },
    run: async (bot, message, args) => {

        var UserNam = message.author.tag
        
        let embed = new MessageEmbed()
            .setTitle(`Voila ta **Carte Bancaire**`)// Le titre du message
            .setColor(`#F20a0a`)// Le couleur du message
            .setFooter(`By !Navillus#7171`)// Ton footer
            .setTimestamp()
            .addField(`Check dans tes **DM** **!**(Message priver)` , `${UserNam}`)

        message.channel.send(embed)

        message.author.send(`**Genova** : Voici Ta **Carte Bancaire** : https://link-to.net/228112/CarteBancaire`);

    }
}
