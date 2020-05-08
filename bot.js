const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});


    
 client.on ('message', async message => {
  if(message.content.startsWith('!')){
  var prefix = "!",
      command = message.content.slice (prefix.length).split (" ")[0],
      sec = 3600;
  switch (command) {
    case "starttime":
      if (message.channel.timeout) return message.channel.send ('time is already started, use !stoptime to stop the loop.');
      else { message.channel.send('Will inform you of the time every hour now starting in '+ (Math.round(leftToFiftyFive()/60000))+ ' minutes.');
            message.channel.timeout=setTimeout(function(){ // in leftToFiftyFive() milliseconds run this:
            message.channel.send(''+new Date().toLocaleTimeString("jp-JP",{timeZone:"Asia/Tokyo",hour12:false,timeZoneName:"short"}));
       message.channel.loop = setInterval (() => message.channel.send (' '+ new Date().toLocaleTimeString("jp-JP",{timeZone:"Asia/Tokyo",hour12:false,timeZoneName:"short"})), sec * 1000)
    }, leftToFiftyFive())
            
function leftToFiftyFive(){
    var d = new Date();
    var d2= -d + d.setMinutes(55,0,0);
    if(d2 <=0) d2= d2+ 3.6e+6;
    return d2;    
}
           }
      break;
    case "stoptime":
      if (!message.channel.timeout) return message.channel.send ('no time to stop lol');
      else {
       message.channel.send('Time stopped');
        clearInterval (message.channel.loop);
        clearTimeout(message.channel.timeout);
        message.channel.loop = false;
       message.channel.timeout= false;
      }
      break;
  }
 }
});
client.on('message', message => {

    if (message.content === 'curTime') {

       message.reply(new Date().toLocaleTimeString("jp-JP",{timeZone:"Asia/Tokyo",hour12:false}));

       }
 });
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
