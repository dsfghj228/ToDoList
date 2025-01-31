import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Task = {
    id: string;
    title: string;
}

interface TasksPageState {
    tasks: Task[];
}

const initialState: TasksPageState = {
  tasks: []
}

export const TasksSlice = createSlice({
  name: 'TasksSlice',
  initialState,
  reducers: {
    clearState: (state) => {
        state.tasks = [];
    },
    addTaskToStore: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTaskFromStore: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    editTaskFromState: (state, action) => {
      const taskIndex = state.tasks.findIndex(t => t.id === action.payload.id);

      state.tasks[taskIndex].title = action.payload.newTitle;
    },
    get: (state, action: PayloadAction<Task[]>) => {
        for(var i = 0; i < action.payload.length; i++)
        {
            state.tasks.push(action.payload[i]);
        }
      },
    
  },
});

export const { clearState, addTaskToStore, deleteTaskFromStore, editTaskFromState, get }= TasksSlice.actions;

export default TasksSlice.reducer;