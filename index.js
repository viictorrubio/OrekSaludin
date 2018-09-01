//Obligatorio del bot
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login("NDg1NDU2MDU5NDQ0NzU2NTEy.Dmwz2g.6rqG3-nzCbw_VdvwjdAV885awE4")
bot.on("ready", ()=> {
    console.log("Bot iniciado...")
})

//Saludo
bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'entradas-y-salidas👋');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Aldean@ : ', `${member}`)
        .addField(':microphone2: | ¡Saludos!', "Bienvenido al pueblo")
        .addField(':id: | Identificación Orek :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Eres el aldean@', `${member.guild.memberCount}`)
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'entradas-y-salidas👋');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Aldean@:', `${member}`)
        .addField('A abandonado el pueblo', ':sob:')
        .addField('El pueblo ahora tiene:', `${member.guild.memberCount}` + " aldean@s")
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});