const { Map } = require('immutable');

function getImmutableObject(object) {
  // Convert the object into an immutable Map using fromJS of immutable.js
  return Map(object);
}
