const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `help`
    },
    run: async (bot, message, args) => {

        var UserNam = message.author.tag
        
        let embed = new MessageEmbed()
            .setTitle(`Voila toute les **Commandes**`)// Le titre du message
            .setColor('#F20a0a')// La couleur du message
            .setFooter(`By Navillus#3258`)// Ton footer
            .setTimestamp()
            .addField(`Voici toute les commandes :` , `+disney
+adn
+crunchyroll
+netflix
+spotify
+psn
+nordvpn
+nitro
+origin
+fortnite
+hulu
+minecraft
+wakanim
+steam
+xbox
+epicgames
+googleplay
+amazon
+uplay
+mega
+cod
+carte
+argent`)

        message.channel.send(embed)
    }
}
