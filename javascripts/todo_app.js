function Todo(title) {
  this.isDone = false;
  this.title = title;
}

var app = new Vue({
  el: "#todo",

  data: {
    todos: [],
    newTodoTitle: ''
  },

  components: {
    todo: {
      template: "<label><input type='checkbox' v-model='isDone' />{{title}}</label>"
    }
  },

  created: function() {
    this.title = "My Todos";
    var initialTodos = ["task A", "task B", "task C"];
    for ( var i = 0; i < initialTodos.length; i++ ) {
      this.todos.push(new Todo(initialTodos[i]));
    }
  },

  methods: {
    addTodo: function() {
      this.todos.push(new Todo(this.newTodoTitle));
      this.newTodoTitle = '';
    },

    removeDone: function() {
      this.todos = this.todos.filter(function(t) { return t.isDone == false });
    }
  }
});
