"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
//递归获取项目中的所有文件路径
function listFile(dir, list = []) {
    let arr = fs_1.default.readdirSync(dir);
    arr.forEach((item) => {
        let fullpath = path_1.default.join(dir, item);
        let stats = fs_1.default.statSync(fullpath);
        if (stats.isDirectory()) {
            listFile(fullpath, list);
        }
        else {
            list.push(fullpath);
        }
    });
    return list;
}
exports.default = listFile;
