const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "youtube",//Nombre del comando
  alias: ["videos"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  execute (client, message, args) {

const embed = new Discord.MessageEmbed()
.setTitle("😀 Video de ✞𝕭𝖎𝖙𝖈𝖍✞😀")
.setDescription("Suscribete al canal de ✞𝕭𝖎𝖙𝖈𝖍✞")
.addField("Cual es el link?", "[Link](https://www.youtube.com/channel/UCzPOJFRxHAc35PMfJD0rz5g/channels)")
.setFooter("Deja tu like")

message.channel.send({ embeds: [embed]})

  }

}