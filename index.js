const{Client} = require("discord.js");
const client = new Client();
client.once("ready", () => {
    client.user.setActivity("cod champs", {type:"COMPETING"});
    console.log(client.user.username + " is now online.");
})
client.login("");
