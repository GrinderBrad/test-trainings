import createReducer from '../../utils/createReducer';
import {Map, List} from 'immutable';
import { initDates, createTrainingObj, setTrainingObj } from './AppActions'

const initialState = Map({
    days: List([]),
    trainings: List([])
});

export default createReducer({
    [setTrainingObj]: (state, action) => {
        const index = state.get('trainings').findIndex((training) => {
            return training.get('day') === action.payload.day;
        });
        return state.setIn(['trainings', index, 'text'], action.payload.text)
    },
    [createTrainingObj]: (state, action) => {
        return state.update('trainings', trainings => {
            return trainings.push(Map({ day: action.payload.day, text: '' }));
        })
    },
    [initDates]: (state, action) => {
        return state.set('days', action.payload);
    }
}, initialState);