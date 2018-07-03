import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  render() {
    return (
      <section className="app">
        <h1 className="title">Reminder Pro</h1>
        <section className="form-inline">
          <section className="form-group">
            <input className="form-control" placeholder="I have to..." onChange={event => this.setState({text: event.target.value})}/>
          </section>
          <button type="button" className="btn btn-success" onClick={() => this.addReminder}>Add</button>
        </section>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder })(App);
