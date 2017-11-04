import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.Model.extend({
  filename: DS.attr('string'),
  url: DS.attr('string'),
  // recipe image
  image: DS.hasMany('image', {inverse: 'imageFile'}),
  // image style ?
  thumbnail: DS.hasMany('image', {inverse: 'thumbnail'}),
  // category image
  category_image: DS.hasMany('category_image', {inverse: 'categoryImageFile'}),

  fullUrl: Ember.computed('url', function() {
    const host = ENV.host;
    let url = this.get('url');
    return `${host}`+`${url}`;
  }),
  inlineBackground: Ember.computed('fullUrl', function () {
    return new Ember.String.htmlSafe( "background-image: url('" + this.get('fullUrl') + "')" );
  })
});
