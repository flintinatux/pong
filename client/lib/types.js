import _ from 'lodash';

import data from '../data/types';

let types = {};

Object.keys(data).forEach(parseType);

function parseType(type) {
  if (!types[type]) {
    types[type] = _.merge({}, data[type]);
    if (types[type].parent) {
      let parent = parseType(types[type].parent);
      types[type] = _.merge({}, parent, types[type]);
    }
  }
  return types[type];
}

export default types;
