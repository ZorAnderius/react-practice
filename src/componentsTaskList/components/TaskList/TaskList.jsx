import { nanoid } from "nanoid"
import { Task } from "../Task/Task"

export const TaskList = ({ tasks, deletTask }) => {
    return <ul>
        {
            tasks.map((task, idx) => {
                return <li key={nanoid()}>
                    {`${idx + 1}. `} <Task deletTask={deletTask} task={ task }/>
                </li>
            })
        }
    </ul>
}