import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      dojos: this.store.findRecord('dojo', params.dojo_id),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var dojo = params.dojo;
      dojo.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return dojo.save();
      });
      this.transitionTo('dojo');
    }
  }
});
