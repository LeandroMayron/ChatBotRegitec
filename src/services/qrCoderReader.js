const qrcode = require("qrcode-terminal");

const qrCoderReader = (client) => {
  client.on("qr", (qr) => {
    // The 'small: true' option generates a smaller QR code
    qrcode.generate(qr, { small: true });
  });
};

module.exports = qrCoderReader;
