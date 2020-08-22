const fs = require('fs').promises;
const yaml = require('js-yaml');
const axios = require('axios');
const toOpenApi = require('json-schema-to-openapi-schema');

  (async () => {
    const api = yaml.safeLoad(await fs.readFile('partial-api.yaml'))
    api.components.schemas.Book = toOpenApi((await axios.get('https://api.openbd.jp/v1/schema?pretty')).data)
    fs.writeFile('bin/openapi.yaml', yaml.safeDump(api).replace(/pettern/g, 'pattern'))
  })()
