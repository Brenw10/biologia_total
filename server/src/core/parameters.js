const yaml = require('js-yaml');
const fs = require('fs');

const parametersString = fs.readFileSync('./src/parameters/params.yml', 'utf8');
const parametersJson = yaml.safeLoad(parametersString);

module.exports = parametersJson;