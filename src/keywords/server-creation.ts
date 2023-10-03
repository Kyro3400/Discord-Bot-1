import Keyword from "../classes/Keyword";

const keyword: Keyword = {
    name: "When will the server creation be back?",
    keywords: ["when", "will", "server", "creation", "be", "back"],
    requiredKeywords: ["server", "creation"],
    response: "Server creation will be back soon! We are currently working on migrating all of the free nodes to higher performance nodes. Read more in the following announcement: https://discord.com/channels/639477525927690240/898050443446464532/1152491902134911019",
    minimumKeywords: 2,
    matchAll: false,
    enabled: true
}

export = keyword;