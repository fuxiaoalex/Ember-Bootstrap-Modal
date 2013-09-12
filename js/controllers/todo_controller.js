Todos.TodoController = Ember.ObjectController.extend({

  //needs: "todo_modal",
  needs: "TodosModal",

  actions: {
      removeTodo: function () {
        var todo = this.get('model');
        todo.deleteRecord();
        todo.save();
      },
  
      isCompleted: function(key, value){
        var model = this.get('model');

        if (value === undefined) {
          // property being used as a getter
          return model.get('isCompleted');
        } else {
          // property being used as a setter
          model.set('isCompleted', value);
          model.save();
          return value;
        }
      }.property('model.isCompleted'),

      editTodo: function (todo) {
        this.send('openModal', 'TodosModal');
        this.get('controllers.TodosModal').send('edit', todo);
      },

      acceptChanges: function () {
         this.set('isEditing', false);
         this.get('model').save();
      }
  },

  isEditing: false,
});