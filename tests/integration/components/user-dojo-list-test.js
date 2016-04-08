import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-dojo-list', 'Integration | Component | user dojo list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{user-dojo-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#user-dojo-list}}
      template block text
    {{/user-dojo-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
