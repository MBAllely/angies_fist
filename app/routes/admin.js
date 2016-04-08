import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('dojo');
  },
  actions: {
    addDojo(params) {
      var newDojo = this.store.createRecord('dojo', params);
      newDojo.save();
      this.transitionTo('admin');
    },
    updateDojo(dojo, params) {
      Object.keys(params).forEach(function(key) {
        dojo.set(key, params[key]);
      });
      dojo.save();
    }
  }
});
