import Keyword from "../classes/Keyword";

const keyword: Keyword = {
    title: "What is the price for VPS?",
    keywords: ["price", "vps"],
    requiredKeywords: ["vps"],
    response: `Pricing can be found as well, on our [billing panel](https://billing.danbot.host)
    
    Pricing is as follows:
        $1 - 1 vCPU, 1GB RAM, 100GB disk
        $2 - 1 vCPU, 2GB RAM, 100GB disk
        $3 - 2 vCPUs, 3GB RAM, 150GB disk
        $4 - 2 vCPUs, 4GB RAM, 150GB disk
        $5 - 3 vCPUs, 5GB RAM, 200GB disk
        $6 - 3 vCPUs, 6GB RAM, 200GB disk
        $7 - 4 vCPUs, 7GB RAM, 250GB disk
        \n-# Please note, pricing is monthly.`,
    minimumKeywords: 1,
    matchAll: false,
    enabled: true
}

export = keyword;
