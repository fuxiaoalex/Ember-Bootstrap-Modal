Todos.ModalView = Ember.View.extend({ 
	
	layout: Em.Handlebars.compile("{{yield}}<div class=modal-backdrop></div>"),

	didInsertElement: function() {

		$('body').on('keyup.modal', function(event) {
	      	if (event.keyCode === 27) this.get('controller').send('close');
	    }.bind(this));

	    this.$('input[type=text]').first().focus();
  	},

  	willDestroyElement: function() {
	    $('body').off('keyup.modal');
	}

});

Todos.TodosModalView = Todos.ModalView.extend({});