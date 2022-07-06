import { useEffect, useState, useReducer } from 'react';
import { iTask } from '../models/tasks';
import { tasksReducer } from '../reducers/tasks.reducer';
import * as api from '../services/http-tasks';
import * as act from '../reducers/tasks.action.creator';
import { TodoContext } from './todo.context';

export function TodoProvider({ children }: { children: JSX.Element }) {
    // Model

    const initialState: Array<iTask> = [];
    const [tasks, dispatch] = useReducer(tasksReducer, initialState);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        api.getAllTasks().then((data) => {
            dispatch(act.loadTasksAction(tasks));
        });
        setLoading(false);
    }, []);

    const addTask = (task: iTask) => {
        api.addTask(task).then((data) => dispatch(act.addTaskAction(data)));
    };

    const completeTask = (task: iTask) => {
        task.isCompleted = !task.isCompleted;
        api.updateTask(task).then((data) =>
            dispatch(act.updateTaskAction(data))
        );
    };

    const deleteTask = (task: iTask) => {
        api.deleteTask(task.id).then((resp) => {
            if (resp.ok) {
                dispatch(act.deleteTaskAction(task));
            }
        });
    };

    const context = {
        tasks,
        loading,
        addTask,
        deleteTask,
        completeTask,
    };

    return (
        <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
    );
}
