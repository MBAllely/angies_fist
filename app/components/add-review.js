import Ember from 'ember';

export default Ember.Component.extend({
  addReview: false,
  actions: {
    addReviewShow() {
      this.toggleProperty('addReview');
    },
    saveReview() {
      var params = {
        dojo: this.get('dojo'),
        author: this.get('author') ? this.get('author'): "",
        body: this.get('body') ? this.get('body'): "",
        rating: this.get('rating') ? this.get('rating'): "",
      };
      this.set('addReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
