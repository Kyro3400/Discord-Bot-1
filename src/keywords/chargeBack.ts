import Keyword from "../classes/Keyword";

const keyword: Keyword = {
    title: "What happens if you try to chargeback via paypal cases or your bank directly?",
    keywords: ["chargeback", "paypal", "bank"],
    requiredKeywords: ["chargeback"],
    response: `As this has always been the case since we started offering a donation link, it will result in a instant ban. \n
    As per our ToS you can request a refund with no questions asked within 14 days of the donation. After that if you are not happy with the services offered you can open a ticket and we will try our best to fix any issues that you have encountered.\n
    See our [Terms of Service](https://danbot.host/tos) and [Chargeback Policy](https://docs.danbot.host/policies/chargeback) respectively.`,
    minimumKeywords: 1,
    matchAll: false,
    enabled: true
}

export = keyword;
