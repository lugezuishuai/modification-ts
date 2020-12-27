import fs from 'fs';
type ProjectRule = (url: string) => string;

export default function getUrl(fileList: string[], regExp: RegExp, rule: ProjectRule) {
    const urls: string[] = [];
    fileList.forEach((file) => {
        try {
            const data = fs.readFileSync(file, 'utf-8');
            if(regExp.test(data)) {
                data.match(regExp)!.forEach((url) => {
                    urls.push(rule(url));
                })
            }
        } catch(err) {
            console.log('Error: ', err);
        }
    })

    return urls;
}