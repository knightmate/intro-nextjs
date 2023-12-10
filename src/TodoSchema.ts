// Todo.ts

type Todo = {
    id: string;
    text: string;
    done: boolean;
  };
  const todos = [
    { id: '1', text: 'Complete homework', done: false },
    { id: '2', text: 'Buy groceries', done: false },
    { id: '3', text: 'Go for a run', done: false },
    { id: '4', text: 'Read a book', done: false },
    { id: '5', text: 'Write a blog post', done: false },
    { id: '6', text: 'Attend a meeting', done: false },
    { id: '7', text: 'Learn a new language', done: false },
    { id: '8', text: 'Practice coding', done: false },
    { id: '9', text: 'Cook dinner', done: false },
    { id: '10', text: 'Watch a movie', done: false },
  ];
  
  class TodoService {
    private todos: Todo[];
  
    constructor(initialTodos: Todo[] = []) {
      this.todos = todos;
    }
  
    // Method to get all todos
    getTodos(): Todo[] {
      return this.todos;
    }
  
    // Method to mark a todo as done by its id
    markDone(todoId: string): boolean {
      const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
  
      if (todoIndex !== -1) {
        // Toggle the 'done' status
        this.todos[todoIndex].done = !this.todos[todoIndex].done;
        return true; // Successfully marked as done
      }
  
      return false; // Todo with given id not found
    }
  }
  
export default new TodoService();  