export interface Rule {
    ProjectRule: (url: string) => string;
    FileRule: (url: string) => string;
}

export const Rule = {
    ProjectRule: (url: string) => url.replace(`'/document/`, '/').replace(/'$/, ''),            // 处理项目匹配项的规则
    FileRule: (url: string) => url.trim()                                                       // 处理文档匹配项的规则
}