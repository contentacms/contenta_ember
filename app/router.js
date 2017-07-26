import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recipes', function() {

    this.route('recipe', {path: '/:recipe_id'});

  });
  this.route('features', function() {
    this.route('article'), {path: '/:slug'};
  });
  this.route('loading');
  this.route('notfound', {path: '*path'});
  this.route('about');
  this.route('contact');
  this.route('categories');
  this.route('articles', function() {
    this.route('article', { path: '/:article_id' });
  });
  this.route('reviews', function() {
    this.route('review', { path: '/:review_id' });
  });
  this.route('login');
});

export default Router;
