import React, {Component} from 'react';
import './weekHeader.css';

const Day = ({day, handleOpenModal}) => {
    return (
        <div className='day' onClick={() => handleOpenModal(day)}>
            <div className='date'>
                {day.format('DD/MM/YYYY')}
            </div>
            <div className='day-name'>
                {day.format('dddd')}
            </div>
        </div>
    )
};
const CircleButton = ({label, onClick}) => {
    return (
        <button className='circle-button' onClick={onClick}>
            <span className='label'>{label}</span>
        </button>
    )
};


export default class WeekHeader extends Component{
    render(){
        const {days, getLastWeek, getNextWeek, handleOpenModal} = this.props;
        return(
            <div id='week-header'>
                <CircleButton label='<' onClick={getLastWeek}/>
                {days.map((day, index) => {
                    return (
                        <Day day={day.date} key={index} handleOpenModal={handleOpenModal}/>
                    )
                })}
                <CircleButton label='>' onClick={getNextWeek}/>
            </div>
        )
    }
}