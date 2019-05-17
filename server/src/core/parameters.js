const yaml = require('js-yaml');
const fs = require('fs');

require.extensions['.yml'] = function (module, filename) {
  const parametersString = fs.readFileSync(filename, 'utf8');
  const parametersJson = yaml.safeLoad(parametersString);

  module.exports = parametersJson;
}

module.exports = require('../parameters/params.yml');