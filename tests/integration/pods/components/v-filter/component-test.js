import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | v-filter', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{v-filter}}`);

    assert.equal(this.element.textContent.trim(), 'Filter by: Customers Status');

    // Template block usage:
    await render(hbs`
      {{#v-filter}}
        template block text
      {{/v-filter}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
