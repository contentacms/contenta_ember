import Ember from 'ember';
import DS from 'ember-data';


export default DS.JSONAPISerializer.extend({
  modelNameFromPayloadKey(key) {
    return (key);
  },
  keyForAttribute(key) {
    return (key);
  },
  keyForRelationship(key) {
    return Ember.String.underscore(key);
  }

});