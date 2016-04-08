import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateDojo(dojo, params) {
      this.sendAction('updateDojo', dojo, params);
    }
  }
});
