import Ember from 'ember';

export default Ember.Component.extend({
  address: Ember.computed('street', 'state', 'zip', function() {
    return this.get('dojo.street') + " " + this.get('dojo.state') + "\n " + this.get('dojo.zip');
  }),

  

  favorites: Ember.inject.service(),

  actions: {
    addToFavorites(item) {
      this.get('favorites').add(item);
      console.log(item);
    }
  }
});
