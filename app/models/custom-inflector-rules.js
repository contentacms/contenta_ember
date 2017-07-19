
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('category', 'categories');
inflector.irregular('file', 'files');
inflector.irregular('image', 'images');
inflector.irregular('recipe', 'recipes');
inflector.irregular('review', 'reviews');
// Meet Ember Inspector's expectation of an export
export default {};
