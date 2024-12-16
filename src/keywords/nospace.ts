import Keyword from "../classes/Keyword";

const keyword: Keyword = {
    title: "I\'m getting a \"No Space\" error when trying to use the hosting. How do i fix it? I have enough space on my server disk.",
    keywords: ["no", "space", "error", "server", "disk", "fix"],
    requiredKeywords: ["no", "space"],
    response: `When installing a package, it creates a temporary directory for installing on the host server. 
    \nThis directory is limited to 100MB in size. So packages bigger than 100MB will fail to install and give out of space error.`,
    minimumKeywords: 3,
    matchAll: false,
    enabled: true
}

export = keyword;
