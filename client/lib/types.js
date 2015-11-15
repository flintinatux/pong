import _ from 'lodash';

import data from '../data/types';

let types = {};

Object.keys(data).forEach(parseType);

function parseType(name) {
  if (!types[name]) {
    let type = data[name];
    let parent = type.parent ? parseType(type.parent) : {};
    types[name] = _.merge({}, parent, type);
  }
  return types[name];
}

export default types;
