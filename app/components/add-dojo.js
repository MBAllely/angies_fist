import Ember from 'ember';

export default Ember.Component.extend({
  addDojoForm: false,
  actions: {
    toggleForm() {
      this.toggleProperty('addDojoForm');
    },
    addDojo() {
      var params = {
        name: this.get('name') ? this.get('name') : "Kung-poo",
        street: this.get('street') ? this.get('street') : "Jackie Chan st",
        state: this.get('state') ? this.get('state') : "OR",
        zip: this.get('zip') ? this.get('zip') : "97219",
        phone: this.get('phone') ? this.get('phone') : 9075554433,
        image: this.get('image') ? this.get('image') : "https://s-media-cache-ak0.pinimg.com/236x/c9/a2/6d/c9a26d17b407b5768c995ce27a0adb81.jpg",
      };
      this.sendAction('addDojo', params);
      this.set('addDojoForm', false)
    }
  }
});
