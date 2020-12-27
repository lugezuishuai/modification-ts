import { Path } from '../config/path';
import { Rule } from '../config/rule';
import { regExp } from '../config/regExp';
import getInvalidUrls from './get_file_urls';
import getUrl from './get_project_urls';
import listFile from '../utils/listFile';
const { FilePath, ProjectPath } = Path;
const { FileRule, ProjectRule } = Rule;
const { FileRegExp, ProjectRegExp } = regExp;

const invalidUrls = getInvalidUrls(FilePath, FileRegExp, FileRule);
const docUrls = getUrl(listFile(ProjectPath), ProjectRegExp, ProjectRule);
const commonUrls = docUrls.filter(url => invalidUrls!.includes(url));
console.log(commonUrls);