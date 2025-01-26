const delay = require("../utils/delay");

const handleMessage = (client) => {
  client.on("message", async (msg) => {
    if (
      msg.body.match(/\b(menu|dia|tarde|noite|oi|olá|ola)\b/i) &&
      msg.from.endsWith("@c.us")
    ) {
      const chat = await msg.getChat();
      await delay(3000);
      await chat.sendStateTyping();
      await delay(3000);

      const contact = await msg.getContact();
      const name = contact.pushname || "Usuário";

      await client.sendMessage(
        msg.from,
        `Olá ${name.split(" ")[0]}! Sou Regis, o assistente virtual da Regitec. Como posso ajudá-lo hoje? Escolha uma das opções abaixo:\n\n1 - Garantia LG\n2 - Fora de Garantia\n3 - Consultar OS em Garantia\n4 - Consultar OS em Orçamento\n5 - Outras perguntas`
      );
    }

    // Outros handlers para opções específicas
    if (msg.body === "1" && msg.from.endsWith("@c.us")) {
      const chat = await msg.getChat();
      await delay(3000);
      await chat.sendStateTyping();
      await delay(3000);

      await client.sendMessage(
        msg.from,
        "Digite uma das opções abaixo para continuar:\n\n1 - Televisores\n2 - Som\n3 - Microondas\n4 - Ar Condicionado\n5 - Máquina de Lavar"
      );
    }

    // Adicione mais lógicas aqui, como para as opções "2", "3", etc.
  });
};

module.exports = handleMessage;
