import React from 'react'
import { TaskList, Task } from '../interfaces/interfaces'
import { useSelector, useDispatch } from 'react-redux'
import { editTask, removeTask, removeAll } from '../reducers/taskSlice'

export default function Listing() {

    const tasks = useSelector((state:TaskList)=> state)
    const dispatch = useDispatch()

  return (
    <div>
        <table>
            <tr>
                <th>Id</th>
                <th>Task</th>
                <th>Remove</th>
                <th>Edit</th>
            </tr>
            {tasks.tasks.tasks.map((task:Task,i:number) => <tr key={i}><td>{task.id}</td><td>{task.task}</td> <td><button onClick={()=> dispatch(removeTask(i))}>Remove task</button></td> <td><button onClick={()=>dispatch(editTask({position:i, id: task.id, taskValue:prompt("Edit value")}))}>Change task</button></td></tr>)}
            <tr><button onClick={()=>dispatch(removeAll())}>Remove all tasks</button></tr>
        </table>
    </div>
  )
}
