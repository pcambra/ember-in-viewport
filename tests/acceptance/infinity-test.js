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
    assert.equal(find('.infinity-basic.inactive').length, 1);
  });
});

test('Component fetches more data when scrolled into viewport', function(assert) {
  visit('/infinity-basic');

  andThen(() => {
    assert.equal(find('.infinity-svg').length, 10);
    assert.equal(find('.infinity-basic.inactive').length, 1, 'component is inactive before fetching more data');
    find('.infinity-basic').get(0).scrollIntoView();
  });

  andThen(() => {
    assert.equal(find('.infinity-svg').length, 20);
    assert.equal(find('.infinity-basic.inactive').length, 1, 'component is inactive after fetching more data');
  });
});