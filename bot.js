const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'new-members');
	if (!channel) return;
	channel.send(`Welcome to the server, ${member}`);
});

  bot.on('message', message => {
	if (!message.guild) return;
  
	if (message.content.startsWith('!ban')) {
	  const user = message.mentions.users.first();
	  if (user) {
		if(!message.member.roles.find(r => r.name === "Administrator")) return message.channel.send('YOU DO NOT HAVE PERMISSIONS')
		const member = message.guild.member(user);
		if (member) {
		  member.ban({
			reason: 'They were bad!',
		  }).then(() => {
			message.reply(`Successfully banned ${user.tag}`);
		  }).catch(err => {
			message.reply('I was unable to ban the member');
			console.error(err);
		  });
		} else {
		  message.reply('That user isn\'t in this guild!');
		}
	  } else {
		message.reply('You didn\'t mention the user to ban!');
	  }
	}
  });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
