const client = require("./src/config/client");
const qrCodeReader = require("./src/services/qrCodeReader");
const handleMessage = require("./src/services/messageHandler");

// Inicializa os serviços
qrCodeReader(client);
handleMessage(client);

// Inicializa o cliente do WhatsApp
client.initialize();
