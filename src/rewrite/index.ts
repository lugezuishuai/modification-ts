import createHashMap from './hashMap';
import fs from 'fs';
import { Path } from '../config/path';
import { regExp } from '../config/regExp';
import { Rule } from '../config/rule';
import listFile from '../utils/listFile';

const { FilePath, ProjectPath } = Path;
const { ProjectRegExp } = regExp;
const { ProjectRule } = Rule;
const hashMap = createHashMap(FilePath);

function rewrite(fileList: string[]) {
    let code = 0;
    fileList.forEach((file) => {
        try {
            let data = fs.readFileSync(file, 'utf-8');
            if(ProjectRegExp.test(data)) {
                data.match(ProjectRegExp)!.forEach((url) => {
                    url = ProjectRule(url);
                    let newUrl = hashMap.get(url);
                    if(newUrl !== undefined) {
                        data = data.replace(url, newUrl);
                        fs.writeFileSync(file, data);
                    }
                })
            }
        } catch(err) {
            code = 1;
            console.log('Error: ', err);
        }
    })
    code === 0 && console.log('修改成功');
}

rewrite(listFile(ProjectPath));