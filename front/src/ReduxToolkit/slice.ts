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
    get: (state, action: PayloadAction<Task[]>) => {
        for(var i = 0; i < action.payload.length; i++)
        {
            state.tasks.push(action.payload[i]);
        }
      },
    
  },
});

export const { clearState, addTaskToStore, get }= TasksSlice.actions;

export default TasksSlice.reducer;