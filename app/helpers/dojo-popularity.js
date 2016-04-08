import Ember from 'ember';

export function dojoPopularity(params) {
  var dojo = params[0];
  if(dojo.get('reviews').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(dojoPopularity);
