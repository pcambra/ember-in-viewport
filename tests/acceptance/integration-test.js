import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | integration', {
  afterEach() {
    // bring testem window up to the top for tests that scroll down
    find(window).scrollTop(0);
  }
});

test('Component is active when in viewport', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => {
    assert.ok(find('.my-component.top.start-enabled.active').length);
  });
});

test('Component is inactive when not in viewport', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => {
    assert.ok(find('.my-component.bottom.inactive').length);
  });
});

test('Component moves to active when scrolled into viewport', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => {
    find('.my-component.bottom').get(0).scrollIntoView();
  });

  waitFor('.my-component.bottom.active');

  andThen(() => {
    assert.ok(find('.my-component.bottom.active').length);
  });
});

test('Component moves back to inactive when scrolled out of viewport', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => {
    find('.my-component.bottom').get(0).scrollIntoView();
  });

  waitFor('.my-component.top.start-enabled.inactive');

  andThen(() => {
    assert.ok(find('.my-component.top.start-enabled.inactive').length);
  });
});

test('Component can be disabled', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(() => {
    assert.ok(find('.my-component.top.start-disabled.inactive').length);
  });
});
