const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `argent`
    },
    run: async (bot, message, args) => {

        var UserNam = message.author.tag
        
        let embed = new MessageEmbed()
            .setTitle(`Voila ton **Argent** a l'infinie`)// Le titre du message
            .setColor('#F20a0a')// La couleur du message
            .setFooter(`By Navillus#3258`)// Ton footer
            .setTimestamp()
            .addField(`Check dans tes **DM** **!**(Message priver)` , `${UserNam}`)

        message.channel.send(embed)

        message.author.send(`**VifHyper** : Voila ton **Argent** a l'infinie  : https://link-to.net/228112/Argentgratuit`);

    }
}