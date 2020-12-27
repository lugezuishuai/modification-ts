export interface RegExpBoth {
    ProjectRegExp: RegExp;
    FileRegExp: RegExp;
}

export const regExp: RegExpBoth = {
    ProjectRegExp: /('\/document\/)(.*?)'/g,              // 项目的正则匹配规则
    FileRegExp: /\/(.*?)[^\S\r\n\f\t]/g,                  // 文档的正则匹配规则
}