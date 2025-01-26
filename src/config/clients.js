const { Client } = require("whatsapp-web.js");

const client = new Client();

client.on("ready", () => {
  console.log("Tudo certo! WhatsApp conectado.");
});

module.exports = client;
