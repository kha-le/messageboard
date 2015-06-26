import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("home");
  this.resource("messages");
  this.route('messages');
});

export default Router;
