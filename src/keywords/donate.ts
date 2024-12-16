import Keyword from "../classes/Keyword";

const keyword: Keyword = {
    title: "How do I get donator servers? How do I donate? How do I get better servers?",
    keywords: ["do", "I", "donate", "servers", "server", "better", "dono node", "paypal"],
    requiredKeywords: ["donate", "donator", "paypal"],
    response: `You can donate to https://paypal.me/DanBotHosting, the required minimum is 1$, divided by the server price for a premium server.
    \n\n> **CURRENT SERVER PRICE:** \`$0.50\`
    \n\n>  Make sure to include your Discord ID in the notes for the donation. Open a ticket, and send a screenshot of the transaction as well as the transaction ID. 
    Staff will then process your donation as soon as possible.`,
    minimumKeywords: 4,
    matchAll: false,
    enabled: true
}

export = keyword;
