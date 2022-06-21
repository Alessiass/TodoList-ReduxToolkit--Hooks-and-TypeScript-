import React, {useState} from 'react'
import { TaskList } from '../interfaces/interfaces'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../reducers/taskSlice'

export default function Adding() {

    const tasks = useSelector((state:TaskList)=> state)
    const dispatch = useDispatch()

    const [taskValue, setValue] = useState("")


  return (
    <div>
        <input type="text" placeholder="Add task..." onChange={(e)=>setValue(e.target.value)} />
        <button type="submit" onClick={()=>dispatch(addTask(taskValue))}>Add task</button>
        <button type="submit" onClick={()=>console.log(tasks)}>Check</button>
    </div>
  )
}
