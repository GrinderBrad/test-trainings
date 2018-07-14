import React, {Component} from 'react';
import './DaysList.css';

const Day = () => {
    return (
        <div className='day'>
            Day
        </div>
    )
};
const CircleButton = ({label}) => {
    return (
        <button className='circle-button'>
            <span className='label'>{label}</span>
        </button>
    )
};


export default class DaysList extends Component{
    render(){
        return(
            <div id='week-header'>
                <CircleButton label='<'/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <CircleButton label='>'/>
            </div>
        )
    }
}