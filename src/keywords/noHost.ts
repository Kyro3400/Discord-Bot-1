import Keyword from "../classes/Keyword";

const keyword: Keyword = {
    title: "What can you not host?",
    keywords: ["what", "can", "i", "you", "not", "host", "blacklisted", "blacklist"],
    requiredKeywords: ["not", "host", "blacklisted", "blacklist"],
    response: `We try and let users host whatever they want, so they get the best experience while using DBH. But we have to have limitations for a real, what are these limitations, read below.
    \n*Note this list is not a complete list, and you may still be banned for hosting stuff that isn't allowed, if your unsure, ask before you host anything.*
    \n\nSee our Acceptable Use Policy [here](https://docs.danbot.host/policies/acceptable-use-policy-pterodactyl/).
    `,
    minimumKeywords: 2,
    matchAll: false,
    enabled: true
}

export = keyword;
