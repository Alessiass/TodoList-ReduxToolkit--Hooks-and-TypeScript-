import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TaskList } from '../interfaces/interfaces'

const initialState:TaskList = {
  counter:0,
  tasks:[]
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state: TaskList, action: PayloadAction<string>) => {
      state.tasks.push(
        {
          id: state.counter,
          task: action.payload
        }
      )
      state.counter +=1
    },
    editTask: (state:TaskList, action: PayloadAction<{position:number, id: number, taskValue:string|null}>) => {
      state.tasks[action.payload.position] = {
        id: action.payload.id,
        task: action.payload.taskValue
      }

    },
    removeTask: (state: TaskList, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload,1)
    },
    removeAll: (state: TaskList) => {
      state.tasks=[]
    },
  },
})

export const { addTask, editTask, removeTask, removeAll } = taskSlice.actions

export default taskSlice.reducer