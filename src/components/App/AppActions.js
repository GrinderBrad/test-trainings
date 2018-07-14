import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');
export const initDates = 'INIT_DATES';
export const setTrainingObj = 'SET_TRAINING';
export const createTrainingObj = 'CREATE_TRAINING';

export function initializeDates() {
    return (dispatch, getState) => {
        const days = [];
        for (let i = 0; i < 7; i++) {
            days.push({ date: moment().add(i,'days'), text: ''});
        }
        return dispatch({ type: initDates, payload: days});
    }
}

export function getNextWeek() {
    return (dispatch, getState) => {
        const weekLastDay = getState().app.toJS().days[6].date.toDate();
        const days = [];
        for (let i = 0; i < 7; i++) {
            days.push({date: moment(weekLastDay).add(i, 'days'), text: ''});
        }
        return dispatch({ type: initDates, payload: days});
    }
}

export function setTraining(day, text) {
    return (dispatch, getState) => {
        return dispatch({type: setTrainingObj, payload: {day, text: text.target.value}})
    }
}

export function createTraining(day) {
    return (dispatch, getState) => {
        return dispatch({type: createTrainingObj, payload: {day}})
    }
}

export function getLastWeek() {
    return (dispatch, getState) => {
        const weekFirstDay = getState().app.toJS().days[0].date.toDate();
        console.log(weekFirstDay);
        const days = [];
        for (let i = 6; i >= 0; i--) {
            days.push({date: moment(weekFirstDay).subtract(i, 'days'), text: ''});
        }
        return dispatch({ type: initDates, payload: days});
    }
}