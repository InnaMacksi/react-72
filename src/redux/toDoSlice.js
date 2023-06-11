const { createSlice } = require("@reduxjs/toolkit");


const toDoSlice = createSlice({
    name: 'test',
    initialState: {toDos: []},
    reducers: {
        addToDo: (state, action) => state.todos.push(action.payload),
        deleteToDo: (state, action) =>state.todos.filter(todo => todo.id !== action.payload),
    },
})

export default toDoSlice.reducer;

export const getTodos = (state) => state.toDos;