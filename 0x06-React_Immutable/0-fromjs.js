const { Map } = require('immutable');

function getImmutableObject(object) {
  return Map.fromJS(object);
}
