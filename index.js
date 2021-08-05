const { Client, Collection } = require('discord.js');
const bot = new Client();
const { token } = require(`./botconfig.json`);
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
        () => `Bot Officiel De VifHyper`,
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