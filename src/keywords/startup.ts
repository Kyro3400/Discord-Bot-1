import Keyword from "../classes/Keyword";

const keyword: Keyword = {
    title: "Why don\'t we change startup commands for users?",
    keywords: ["why", "do", "we", "change", "startup", "commands", "command"],
    requiredKeywords: ["startup", "commands", "command"],
    response: `There are a few reasons why we don\'t change the startup commands of servers, some of them include:
    \n- False flags by the anti-abuse system.
    \n- Some startup flags could cause a stability issue within the server/node.`,
    minimumKeywords: 3,
    matchAll: false,
    enabled: true
}

export = keyword;
