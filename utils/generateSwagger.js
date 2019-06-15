const { resolve } = require('path');

const { openApi } = require('../src/app');

openApi().save(resolve(__dirname, '../docs/swagger.json'));