import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <section className="app">
        <h1 className="title">Reminder Pro</h1>
        <section className="form-inline">
          <section className="form-group">
            <input clasName="form-control" placeholder="I have to..." />
          </section>
          <button type="button" className="btn btn-success">Add</button>
        </section>
      </section>
    )
  }
}

export default App;
