import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      dojos: this.store.findAll('dojo'),
      reviews: this.store.findAll('review')
    });
  }
});
