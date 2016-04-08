import Ember from 'ember';

export default Ember.Component.extend({
  updateShowing: false,
  actions: {
    toggleUpdateForm() {
      this.toggleProperty('updateShowing');
    },
    updateDojo(dojo) {
      var params = {
        name: this.get('dojo.name'),
        phone: this.get('dojo.phone'),
        street: this.get('dojo.street'),
        state: this.get('dojo.state'),
        zip: this.get('dojo.zip'),
        image: this.get('dojo.image')
      };
      this.sendAction('updateDojo', dojo, params);
    }
  }
});
