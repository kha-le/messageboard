import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addMessage: function() {
      var newMessage = this.store.createRecord('message', {
        question: this.get('question'),
        author: this.get('author'),
        body: this.get('body')
      })
      newMessage.save()
      this.setProperties({
        question:'',
        author:'',
        body:''
      });
    }
  }
});
