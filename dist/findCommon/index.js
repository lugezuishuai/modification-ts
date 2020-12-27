"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("../config/path");
const rule_1 = require("../config/rule");
const regExp_1 = require("../config/regExp");
const get_file_urls_1 = __importDefault(require("./get_file_urls"));
const get_project_urls_1 = __importDefault(require("./get_project_urls"));
const listFile_1 = __importDefault(require("../utils/listFile"));
const { FilePath, ProjectPath } = path_1.Path;
const { FileRule, ProjectRule } = rule_1.Rule;
const { FileRegExp, ProjectRegExp } = regExp_1.regExp;
const invalidUrls = get_file_urls_1.default(FilePath, FileRegExp, FileRule);
const docUrls = get_project_urls_1.default(listFile_1.default(ProjectPath), ProjectRegExp, ProjectRule);
const commonUrls = docUrls.filter(url => invalidUrls.includes(url));
console.log(commonUrls);
