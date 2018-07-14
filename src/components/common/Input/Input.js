import React, {Component} from 'react';
import './Input.css';


export default function Input({ inputProps, label }) {
    return (
        <div className='input-container'>
            <span>{label}</span>
            <input {...inputProps} className='input'/>
        </div>
    )
}