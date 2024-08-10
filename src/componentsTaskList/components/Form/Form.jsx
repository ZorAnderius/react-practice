import { nanoid } from "nanoid";

export const Form = ({ addTask }) => {
    
    const handleSubmit = e => {
        e.preventDefault();
        addTask({
            id: nanoid(),
            text: e.target.elements.task.value
        });
        e.target.reset();
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="task"/>
        <button type="submit">Add task</button>
    </form>
}