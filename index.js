
// Importa o cliente do WhatsApp //
const client = require("./src/config/clients");
const qrCodeReader = require("./services/qrCoderReader");
const handleMessage = require("./src/services/messageHandler");

// Inicializa os serviços//
qrCodeReader(client);
handleMessage(client);

// Inicializa o cliente do WhatsApp//
client.initialize();
