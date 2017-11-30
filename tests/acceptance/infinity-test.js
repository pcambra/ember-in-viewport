import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | infinity-scrollable', {
  afterEach() {
    // bring testem window up to the top.  
    find(window).scrollTop(0);
  }
});

test('Component is inactive when not in viewport', function(assert) {
  assert.expect(1);

  visit('/infinity-scrollable');

  andThen(() => {
    assert.equal(find('.infinity-scrollable.inactive').length, 1);
  });
});

test('IntersectionObserver Component fetches more data when scrolled into viewport', function(assert) {
  visit('/infinity-scrollable');

  andThen(() => {
    assert.equal(find('.infinity-svg').length, 10);
    assert.equal(find('.infinity-scrollable.inactive').length, 1, 'component is inactive before fetching more data');
    find('.infinity-scrollable').get(0).scrollIntoView();
  });

  waitFor('.infinity-scrollable.inactive');

  andThen(() => {
    assert.equal(find('.infinity-svg').length, 20);
    assert.equal(find('.infinity-scrollable.inactive').length, 1, 'component is inactive after fetching more data');
  });
});

test('rAF Component fetches more data when scrolled into viewport', function(assert) {
  visit('/infinity-scrollable');

  andThen(() => {
    assert.equal(find('.infinity-svg-rAF').length, 10);
    assert.equal(find('.infinity-scrollable-rAF.inactive').length, 1, 'component is inactive before fetching more data');
    find('.infinity-scrollable-rAF').get(0).scrollIntoView();
  });

  waitFor('.infinity-scrollable-rAF.inactive');

  andThen(() => {
    assert.equal(find('.infinity-svg-rAF').length, 20);
    assert.equal(find('.infinity-scrollable-rAF.inactive').length, 1, 'component is inactive after fetching more data');
  });
});