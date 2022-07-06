// Flux - Redux
// Reducer -> pure function (do not depend on anything external, do not modify anything external)
// Receives an state and an action, returns a new state

import { iTask } from '../models/tasks';
import { iAction } from './tasks.action.creator';
import { actionTypes } from './tasks.action.types';

type actionTasks = Array<iTask> | iTask;

export function tasksReducer(
    previousState: Array<iTask>,
    action: iAction<actionTasks>
) {
    let state: Array<iTask>;
    switch (action.type) {
        case actionTypes['tasks@load']:
            state = action.payload as Array<iTask>;
            break;
        case actionTypes['tasks@add']:
            state = [...previousState, action.payload as iTask];
            break;
        case actionTypes['tasks@delete']:
            state = previousState.filter(
                (item) => item.id !== (action.payload as iTask).id
            );
            break;
        case actionTypes['tasks@update']:
            state = previousState.map((item) =>
                item.id === (action.payload as iTask).id
                    ? (action.payload as iTask)
                    : item
            );
            break;
        default:
            state = previousState;
    }
    return state;
}
