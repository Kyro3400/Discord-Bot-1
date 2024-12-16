import Keyword from "../classes/Keyword";

const keyword: Keyword = {
    title: "What can you not host?",
    keywords: ["what", "can", "i", "you", "not", "host", "blacklisted", "blacklist"],
    requiredKeywords: ["not", "host", "blacklisted", "blacklist"],
    response: `We try and let users host whatever they want, so they get the best experience while using DBH. But we have to have limitations for a real, what are these limitations, read below.
    \n*Note this list is not a complete list, and you may still be banned for hosting stuff that isn't allowed, if your unsure, ask before you host anything.*
    \n\n- DDoS Tools.
    \n- Scrapers.
    \n- Game Servers(That aren't on a donator node, e.g. hosting a Minecraft server on a normal java server.)
    \n- Servers that purposely use up resources (Including V3 aoi.js).
    \n- Discord Ratelimiters.
    \n- PteroVM\'s or servers attempting to gain root access.
    \n- Whatsapp Bots.
    \n-Nitro Generators or token grabbers etc.
    \n\n> ***Anything against Discord Terms of Service is also off limits.***
    `,
    minimumKeywords: 2,
    matchAll: false,
    enabled: true
}

export = keyword;
