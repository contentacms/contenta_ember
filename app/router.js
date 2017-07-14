import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recipes', function() {
    this.route('show', { path: '/:recipe_id' });
  });
  this.route('features', function() {
    this.route('article'), {path: '/:slug'};
  });
  this.route('loading');
  this.route('notfound', {path: '*path'});
  this.route('about');
  this.route('contact');
  this.route('categories');
  this.route('reviews', function() {});
});

export default Router;
