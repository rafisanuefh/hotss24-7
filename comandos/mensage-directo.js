const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "md",//Nombre del comando
  alias: ["mensage-directo"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

    if(message.author.id !== "924780651331350559") return message.channel.send("❌ `|` Tu no eres el developer del bot, por lo tanto no puedes iniciar este comando.")
    const userID = args[0]
    if(!userID) return message.channel.send("Pon una ID, o menciona a un usuario!")
    const user = message.mentions.members.first() || message.guild.members.cache.get(userID)
    const mensaje = args.slice(1).join(" ")
    if(!mensaje) return message.reply("Pon texto!")
    if(!user) return message.reply("No se encontro al usuario")
    const embed = new Discord.MessageEmbed()
    .setTitle(`Desde el servidor: ${message.guild.name}`)
    .setDescription(mensaje)
    .setTimestamp()
    user.send({ embeds: [embed] })
message.channel.send("Mensaje enviado correctamente")    


  }

}