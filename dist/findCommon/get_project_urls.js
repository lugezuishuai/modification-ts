"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function getUrl(fileList, regExp, rule) {
    const urls = [];
    fileList.forEach((file) => {
        try {
            const data = fs_1.default.readFileSync(file, 'utf-8');
            if (regExp.test(data)) {
                data.match(regExp).forEach((url) => {
                    urls.push(rule(url));
                });
            }
        }
        catch (err) {
            console.log('Error: ', err);
        }
    });
    return urls;
}
exports.default = getUrl;
