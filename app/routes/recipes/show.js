export default Ember.Route.extend({
    model(params) {
        return this.get('store').findRecord('recipes', params.recipe_id);
    }
});