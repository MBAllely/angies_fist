import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleUpdateForm() {
      this.toggleProperty('updateShowing');
    },
    updateDojo(dojo, params) {
      this.sendAction('updateDojo', dojo, params);
    }
  }
});
