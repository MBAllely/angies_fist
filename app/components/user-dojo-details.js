import Ember from 'ember';

export default Ember.Component.extend({
  address: Ember.computed('street', 'state', 'zip', function() {
    return this.get('dojo.street') + " " + this.get('dojo.state') + "\n " + this.get('dojo.zip');
  }),

  averageRating: Ember.computed('reviews', function() {
    var total = 0;
    this.get('dojo.reviews').forEach(function(review) {
      console.log(total);
      total += parseInt(review.rating);
    });
    var averageRating = (total / parseInt(this.get('dojo.reviews.length')));
    return averageRating;
  }),

  favorites: Ember.inject.service(),

  actions: {
    addToFavorites(item) {
      this.get('favorites').add(item);
      console.log(item);
    }
  }
});
