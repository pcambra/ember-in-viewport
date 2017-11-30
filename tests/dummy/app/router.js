import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('infinity');
  this.route('infinity-scrollable');
  this.route('infinity-scrollable-raf');
  this.route('infinity-scrollable-scrollevent');
});

export default Router;
