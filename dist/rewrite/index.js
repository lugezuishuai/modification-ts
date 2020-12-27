"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hashMap_1 = __importDefault(require("./hashMap"));
const fs_1 = __importDefault(require("fs"));
const path_1 = require("../config/path");
const regExp_1 = require("../config/regExp");
const rule_1 = require("../config/rule");
const listFile_1 = __importDefault(require("../utils/listFile"));
const { FilePath, ProjectPath } = path_1.Path;
const { ProjectRegExp } = regExp_1.regExp;
const { ProjectRule } = rule_1.Rule;
const hashMap = hashMap_1.default(FilePath);
function rewrite(fileList) {
    let code = 0;
    fileList.forEach((file) => {
        try {
            let data = fs_1.default.readFileSync(file, 'utf-8');
            if (ProjectRegExp.test(data)) {
                data.match(ProjectRegExp).forEach((url) => {
                    url = ProjectRule(url);
                    let newUrl = hashMap.get(url);
                    if (newUrl !== undefined) {
                        data = data.replace(url, newUrl);
                        fs_1.default.writeFileSync(file, data);
                    }
                });
            }
        }
        catch (err) {
            code = 1;
            console.log('Error: ', err);
        }
    });
    code === 0 && console.log('修改成功');
}
rewrite(listFile_1.default(ProjectPath));
