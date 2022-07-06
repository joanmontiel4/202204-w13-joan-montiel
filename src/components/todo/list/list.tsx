import { useContext } from 'react';
import { TodoContext } from '../../../context/todo.context';
import { Add } from '../add/add';
import { Task } from '../task/task';
import './list.css';

export function List() {
    const { tasks, loading } = useContext(TodoContext);

    return (
        <>
            <p>List</p>
            <Add></Add>
            {loading && <p>Loading</p>}
            <ul>
                {tasks.map((item) => (
                    <li key={item.id} className="task-list">
                        <Task task={item}></Task>
                    </li>
                ))}
            </ul>
        </>
    );
}
