import merge from 'lodash/object/merge';

import data from '../data/types';

let types = {};

Object.keys(data).forEach(parseType);

function concatProperties(a, b, key) {
  if (key === 'properties' && Array.isArray(a)) return a.concat(b);
}

function parseType(type) {
  if (!types[type]) {
    types[type] = merge({}, data[type]);
    if (types[type].parent) {
      let parent = parseType(types[type].parent);
      types[type] = merge({}, parent, types[type], concatProperties);
    }
  }
  return types[type];
}

export default types;
