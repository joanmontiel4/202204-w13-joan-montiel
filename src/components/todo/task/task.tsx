import { useContext } from 'react';
import { TodoContext } from '../../../context/todo.context';
import { iTask } from '../../../models/tasks';

export function Task({ task }: { task: iTask }) {
    const { deleteTask, completeTask } = useContext(TodoContext);

    const handleClick = () => deleteTask(task as iTask);
    const handleChange = () => completeTask(task);

    return (
        <>
            <span>
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={handleChange}
                />
            </span>
            <span>{task.title}</span>
            <span> | </span>
            <span>{task.responsible}</span>
            <span role="button" className="button" onClick={handleClick}>
                🗑️
            </span>
        </>
    );
}
