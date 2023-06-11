const { createSlice } = require('@reduxjs/toolkit');

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [] },
  reducers: {
    // addTodo: (state, action) => ({
    //   ...state,
    //   todos: [...state.todos, action.payload],
    // }),
    // addTodo() {
    //   state.todos = [...state.todos, action.payload]
    // }
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    // deleteTodo: (state, action) => ({
    //   ...state,
    //   todos: state.todos.filter(todo => todo.id !== action.payload),
    // }),
    // deleteTodo(state, { payload }) {
    //   const index = state.todos.findIndex(todo => todo.id === payload);
    //   state.todos.splice(index, 1);
    // },
    deleteTodo(state, { payload }) {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },

    updateTodo(state, { payload }) {
      state.todos = state.todos.map(todo =>
        todo.id === payload.id ? payload : todo
      );
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export const getTodos = state => state.todos;
