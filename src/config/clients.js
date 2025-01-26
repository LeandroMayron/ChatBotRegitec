const { Client } = require("qrCoderReader");

const client = new Client();

client.on("ready", () => {
  console.log("Tudo certo! WhatsApp conectado.");
});

module.exports = client;
