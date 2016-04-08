import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  street: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('number'),
  phone: DS.attr('number'),
  image: DS.attr('string'),
  reviews: DS.hasMany('review', { async: true })
});
