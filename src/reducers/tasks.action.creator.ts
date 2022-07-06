import { iTask } from '../models/tasks';
import { actionTypes } from './tasks.action.types';

export interface iAction<T> {
    type: actionTypes;
    payload: T;
}

export const loadTasksAction = (
    tasks: Array<iTask>
): iAction<Array<iTask>> => ({
    type: actionTypes['tasks@load'],
    payload: tasks,
});

export const addTaskAction = (task: iTask): iAction<iTask> => ({
    type: actionTypes['tasks@add'],
    payload: task,
});

export const updateTaskAction = (task: iTask): iAction<iTask> => ({
    type: actionTypes['tasks@update'],
    payload: task,
});

export const deleteTaskAction = (task: iTask): iAction<iTask> => ({
    type: actionTypes['tasks@delete'],
    payload: task,
});
