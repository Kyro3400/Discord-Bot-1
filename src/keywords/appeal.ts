import Keyword from "../classes/Keyword";

const appeal: Keyword = {
    title: "How do I appeal a ban / suspension?",
    keywords: ["appeal", "ban", "suspension", "unban", "unsuspend", "appealing"],
    requiredKeywords: ["appeal", "unban", "unsuspend"],
    response: `If you are trying to appeal a ban or suspension, please contact our the appeals team through this guide: https://docs.danbot.host/appealing-a-ban/.`,
    minimumKeywords: 1,
    matchAll: false,
    enabled: true
}

export = appeal;