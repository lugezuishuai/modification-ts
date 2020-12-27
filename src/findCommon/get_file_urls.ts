import fs from 'fs';
type FileRule = (url: string) => string;

export default function getInvalidUrls(path: string, regExp: RegExp, rule: FileRule) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        if(regExp.test(data)) {
            return data.match(regExp)!.map(rule);
        }
    } catch(err) {
        console.log('Error: ', err);
    }
} 