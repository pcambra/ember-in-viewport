import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';

const {
  Component,
  on,
  get,
  getProperties, setProperties
} = Ember;

export default Component.extend(InViewportMixin, {
  classNames: ['my-component'],
  classNameBindings: ['viewportEntered:active:inactive'],

  viewportOptionsOverride: on('didInsertElement', function() {
    let options = {};

    let {
      viewportSpyOverride,
      viewportEnabledOverride,
      viewportIntersectionObserverOverride,
      scrollableAreaOverride
    } = getProperties(this,
      'viewportSpyOverride',
      'viewportEnabledOverride',
      'viewportIntersectionObserverOverride',
      'scrollableAreaOverride'
    );

    if (viewportSpyOverride !== undefined) {
      options.viewportSpy = viewportSpyOverride;
    }
    if (viewportEnabledOverride !== undefined) {
      options.viewportEnabled = viewportEnabledOverride;
    }
    if (viewportIntersectionObserverOverride !== undefined) {
      options.viewportUseIntersectionObserver = viewportIntersectionObserverOverride;
    }
    if (scrollableAreaOverride !== undefined) {
      options.scrollableArea = scrollableAreaOverride;
    }

    setProperties(this, options);
  }),

  didEnterViewport() {
    if (get(this, 'infinityLoad')) {
      get(this, 'infinityLoad')();
    }
  }
});
