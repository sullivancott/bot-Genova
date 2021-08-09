const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `cod`
    },
    run: async (bot, message, args) => {

        var UserNam = message.author.tag
        
        let embed = new MessageEmbed()
            .setTitle(`Voila ton **Call of Duty**`)// Le titre du message
            .setColor(`#F20a0a`)// Le couleur du message
            .setFooter(`By Navillus#3258`)// Ton footer
            .setTimestamp()
            .addField(`Check dans tes **DM** **!**(Message priver)` , `${UserNam}`)

        message.channel.send(embed)

        message.author.send(`**Genova** : Voici Ton **Call of Duty** : https://direct-link.net/228112/CallOfDuty`);

    }
}