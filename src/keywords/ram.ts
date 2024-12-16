import Keyword from "../classes/Keyword";

const keyword: Keyword = {
    title: "Why do we no longer offer RAM upgrades?",
    keywords: ["why", "do", "we", "no", "longer", "offer", "ram","upgrades", "upgrade"],
    requiredKeywords: ["ram", "upgrade", "upgrades"],
    response: `\`Dono-02\`, \`Dono-04\` servers had their maximum RAM increased from \`4GB to 6GB\`. As per limited resources, we will not be offering additional RAM upgrades to these servers.`,
    minimumKeywords: 3,
    matchAll: false,
    enabled: true
}

export = keyword;
