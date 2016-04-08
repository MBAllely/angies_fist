import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service(),
  
  model(params) {
    return Ember.RSVP.hash({
      dojos: this.store.findAll('dojo'),
      reviews: this.store.findAll('review')
    });
  }
});
