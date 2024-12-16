import Keyword from "../classes/Keyword";

const keyword: Keyword = {
    title: "Who are the staff?",
    keywords: ["who", "are", "the", "staff", "team"],
    requiredKeywords: ["staff"],
    response: `**__Here is a list of all of our staff within DBH__**
    \n\n__Helpers__
    \n- <@1056531806763102218>
    \n- <@424206236729344001>
    \n- <@569352110991343616>
    \n- <@549647456837828650>
    \n\n__Trial Developers__
    \n- <@1147967929539895316>
    \n- <@681811851428102145>
    \n- <@761614035908034570>
    \n- <@1212043905059790881>
    \n- <@541240296453832735>
    \n- <@600721571144925212>
    \n\n__Moderators__
    \n- N/A
    \n\n__Developers__
    \n- <@526191240962768910>
    \n- <@825370766999552011>
    \n- <@273352781442842624>
    \n\n__Admins__
    \n- <@459025800633647116>
    \n- <@218023395965665281>
    \n- <@813003040504283156>
    \n- <@737603315722092544>
    \n- <@856176853719187506>
    \n\n__Management__
    \n- <@757296951925538856>
    \n- <@405771597761216522>
    \n- <@137624084572798976>
    `,
    minimumKeywords: 2,
    matchAll: false,
    enabled: true
}

export = keyword;
