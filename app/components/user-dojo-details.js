import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),

  actions: {
    addToFavorites(item) {
      this.get('favorites').add(item);
      console.log(item);
    }
  }
});
