const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `hulu`
    },
    run: async (bot, message, args) => {

        var UserNam = message.author.tag
        
        let embed = new MessageEmbed()
            .setTitle(`Voila ton **Hulu**`)// Le titre du message
            .setColor(`#F20a0a`)// Le couleur du message
            .setFooter(`By !Navillus#7171`)// Ton footer
            .setTimestamp()
            .addField(`Check dans tes **DM** **!**(Message priver)` , `${UserNam}`)

        message.channel.send(embed)

        message.author.send(`**Genova** : Voici Ton **Hulu** : https://up-to-down.net/228112/Hulu`);

    }
} 
