const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = (client, message) => {

    const presence = [
        {
            name: `𝑷𝒓𝒊𝒔𝒎𝑭𝒂𝒈 𝑫𝒆𝒗`,
            type: 'WATCHING'
        },
    ]

    const random = presence[Math.floor(Math.random() * presence.length)]
    
    setInterval(() => {
        function presence() {
            client.user.setPresence({
                activities: [random],
                 status: `on`
            })   
        }
        presence()
    }, 4000)

}