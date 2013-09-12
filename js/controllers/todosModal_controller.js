Todos.TodosModalController = Ember.ObjectController.extend({
  
  actions: {
  	
  	edit: function(todo) {
    	this.set('model', todo);
  	},

  	close: function() {
  		var model = this.get('model');
  		model.rollback();
	    this.set('isShowingMsg', false);
	    this.send('closeModal');
	},

    save: function() {
        this.get('model').save();
        this.set('isShowingMsg', true);
    }
  }

});