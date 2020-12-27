"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = require("../config/path");
const { FilePath } = path_1.Path;
function createHashMap(path) {
    let hashMap = new Map();
    try {
        const data = fs_1.default.readFileSync(path, 'utf-8');
        data.split(`\n`).forEach(item => {
            let arr = item.split(' ').map(str => str.trim()).filter(str => str.trim());
            hashMap.set(arr[0], arr[1]);
        });
    }
    catch (err) {
        console.log('Error: ', err);
    }
    return hashMap;
}
exports.default = createHashMap;
// console.log(createHashMap(FilePath));
