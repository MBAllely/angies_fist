import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  phone: DS.attr('number'),
  image: DS.attr('string'),
  reviews: DS.hasMany('review', { async: true })
});
