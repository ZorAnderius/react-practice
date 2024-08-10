export const Task = ({ task: { text, id }, deletTask }) => {
    return <>
        <p>{text}</p>
        <button type="button" onClick={()=>deletTask(id)}>Delete</button>
    </>
}