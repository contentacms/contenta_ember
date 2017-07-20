import ENV from '../config/environment';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://contentacms.eclecticmeme.com', //drupal
  namespace: 'api',
});