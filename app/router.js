import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("home");
  this.resource('message', { path: '/message/:message_id'});
  this.resource("messages", function() {
    this.route("new");
  });
});

export default Router;
