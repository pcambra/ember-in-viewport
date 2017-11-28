import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | infinity-basic', {
  afterEach() {
    // bring testem window up to the top.  
    find(window).scrollTop(0);
  }
});

test('Component is inactive when not in viewport', function(assert) {
  assert.expect(1);

  visit('/infinity-basic');

  andThen(() => {
    assert.ok(find('.infinity-basic.inactive').length);
  });
});

test('Component fetches more data when scrolled into viewport', function(assert) {
  visit('/infinity-basic');

  andThen(() => {
    assert.ok(find('.infinity-basic.inactive').length);
    find('.infinity-basic').get(0).scrollIntoView();
    assert.equal(find('.infinity-svg').length, 10);
  });

  andThen(() => {
    assert.ok(find('.infinity-basic.inactive').length);
    assert.equal(find('.infinity-svg').length, 20);
  });
});