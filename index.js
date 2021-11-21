const { Client, Collection } = require("discord.js")
const { token, defprefix } = require("./config")


const maintence = false;

const db = require("quick.db");

const client = new Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  disableEveryone: true,
  disabledEvents: ["TYPING_START"]
})

const maintenance = false

client.commands = new Collection()
client.limits = new Map();

const commands = require("./mainframe/command")
commands.run(client);

const presence = require("./mainframe/presence")
presence.run(client,maintence);

const events = require("./mainframe/event")
events.run(client);

client.login(token);


        
client.login(token);