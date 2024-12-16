import Keyword from "../classes/Keyword";

const keyword: Keyword = {
    title: "What are the server IP\`s?",
    keywords: ["what", "are", "the", "ips", "ip"],
    requiredKeywords: ["ip", "ips"],
    response: `**__Free Nodes__**
    \n- **Pnode-1:** \`88.99.138.239\`
    \n- **Pnode-2:** \`128.254.225.56\`
    \n- **Pnode-3:** \`128.254.225.82\`
    \n\n**__Premium Nodes__**
    \n- **Dono-1:** \`69.30.219.178\`
    \n- **Dono-2:** \`37.27.109.86\`
    \n- **Dono-3:** \`162.55.90.92\`
    \n- **Dono-4:** \`37.27.69.203\`
    \n- **Dono-5:** \`37.27.97.143\``,
    minimumKeywords: 3,
    matchAll: false,
    enabled: true
}

export = keyword;
