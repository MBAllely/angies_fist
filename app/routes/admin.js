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
    }
  }
});
