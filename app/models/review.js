import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  body: DS.attr('string'),
  rating: DS.attr('number'),
  date: DS.attr('date', { defaultValue() { return new Date(); }}),
  dojo: DS.belongsTo('dojo', { async: true })
});
