const qrcode = require("qrcode-terminal");

const qrCodeReader = (client) => {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });
};

module.exports = qrCodeReader;
