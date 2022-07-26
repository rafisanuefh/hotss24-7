const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "help",//Nombre del comando
  alias: ["videos"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

const embed = new Discord.MessageEmbed()
.setTitle("Menu de ayuda")
.setDescription("Soy un  bot multifunciones del server")
.addField("Comandos", "l!youtube")
.setFooter("Help | LeonFag")

message.channel.send({ embeds: [embed]})

  }

}