import { createContext } from 'react';
import { iTask } from '../models/tasks';

const initialContext: {
    tasks: Array<iTask>;
    loading: boolean;
    addTask(task: iTask): void;
    deleteTask(task: iTask): void;
    completeTask(task: iTask): void;
} = {
    tasks: [],
    loading: false,
    addTask: (task) => {},
    deleteTask: (task) => {},
    completeTask: (task) => {},
};

export const TodoContext = createContext(initialContext);
