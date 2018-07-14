import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import WeekHeader from "../common/week-header/weekHeader";
import Modal from 'react-responsive-modal';
import Input from "../common/Input/Input";

class App extends Component {
    state = {
        showModal: false,
        text: '',
        currentDay: ''
    };
  componentDidMount(){
      this.props.actions.initializeDates();
  }
    handleOpenModal = (day) => {
        const foundDay = this.props.trainings.find((training) => {
            return training.day.format('DD/MM/YYYY') === day.format('DD/MM/YYYY');
        });
        if(!foundDay){
            this.props.actions.createTraining(day);
        }
        this.setState({ showModal: true, currentDay: day});
    };

    handleInput = (currentDay, e) => {
        this.props.actions.setTraining(currentDay, e.target.value);
    };

    getValueByDay = (day) => {
        const foundTraining = this.props.trainings.find((training) => training.day.format('DD/MM/YYYY') === day.format('DD/MM/YYYY'));
        return foundTraining ? foundTraining.text : '';
    };

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };
  render() {
    const {days, actions, trainings} = this.props;
    const { showModal, text, currentDay} = this.state;
    return (
      <div className="App">
          <Modal open={showModal} onClose={this.handleCloseModal} center>
              <Input inputProps={{onChange: (e) => actions.setTraining(currentDay, e), value: this.getValueByDay(currentDay) }}/>
          </Modal>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='calendar'>
            <WeekHeader days={days}
                        getLastWeek={actions.getLastWeek}
                        handleOpenModal={this.handleOpenModal}
                        getNextWeek={actions.getNextWeek}/>
        </div>
      </div>
    );
  }
}

export default App;
