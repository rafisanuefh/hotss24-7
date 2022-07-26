const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "send",//Nombre del comando
  alias: ["enviar"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

    const channel = message.mentions.channels.first()
    let sendch = message.guild.channels.cache.find(channeL => channeL.name === `${channeL}`)
    const mensaje = args.slice(1).join(' ');
    if(!channel) return message.reply("Especifica el canal!")
    if(!message) return message.reply("Especifica lo que quieres decir OwO")
    message.delete()
    channel.send(mensaje)

  }

}

