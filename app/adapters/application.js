import ENV from '../config/environment';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: ENV.host,
  namespace: ENV.namespace
});