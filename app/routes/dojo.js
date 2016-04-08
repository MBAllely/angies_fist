import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      dojos: this.store.findRecord('dojo', params.dojo_id),
      reviews: this.store.findAll('review')
    });
  }
});
