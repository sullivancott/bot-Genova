const Discord = require('discord.js'),
    bot = new Discord.Client({
        fetchAllMembers: true,
        partials: ['MESSAGE', 'REACTION']
    }),
const { prefix } = require(`./config.json`);
[`aliases`, `commands`].forEach(x => bot[x] = new Collection());
["command", "events"].forEach(x => require(`./handlers/${x}`)(bot));
bot.login(process.env.token);

bot.on("ready", () => {
    console.log("+--------------+");
    console.log("|  BOT ONLINE  |");
    console.log("+--------------+");
    console.log(`| Serveurs: ${bot.guilds.cache.size} |`);
    console.log("+--------------+");
    const statuses = [
        () => `Bot Officiel De Genova`,
        () => `By Navillus`
    ]
    let i = 0
    setInterval(() => {
        bot.user.setActivity(statuses[i](), {type: "PLAYING"})
        i = ++i % statuses.length
    }, 1e4)
})

bot.on("message", message => {

    if(message.content.startsWith("+clear")){
    message.delete();
        if(message.member.hasPermission("MANAGE_MESSAGES")){

            let args = message.content.trim().split(/ +/g);
            
            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 &&  args[1] <= 99){

                 message.channel.bulkDelete(args[1])
                 message.channel.send(`Vous avez supprimé ${args[1]} message(s)`)

                 }
                 else{
                     message.channel.send(`vous devez indiquer une valeur entre 1 et 99 !`)
                 } }
                 else{
                 message.channel.send(`vous devez indiquer un nombre de messages a supprimer !`)
                }
            }
        }
    }
)

bot.on('messageReactionAdd', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})
 
bot.on('messageReactionRemove', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
})

