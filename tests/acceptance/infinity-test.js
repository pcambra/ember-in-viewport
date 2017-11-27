import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | infinity-basic', {
  afterEach() {
    // bring testem window up to the top.  This is a minor issue in the other acceptance test
    // if ran tests in diff order, may see intermittent failures
    find(window).scrollTop(0);
  }
});

test('Component moves to active when scrolled into viewport', function(assert) {
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

test('Component is inactive when not in viewport', function(assert) {
  assert.expect(1);

  visit('/infinity-basic');

  andThen(() => {
    assert.ok(find('.infinity-basic.inactive').length);
  });
});