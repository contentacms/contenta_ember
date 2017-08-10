import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['promoted-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  }

});
