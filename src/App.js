import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 0, title: 'Create todo app', done: false },
        { id: 1, title: 'Wash window', done: false },
        { id: 2, title: 'Go for a walk with smbd', done: false }
      ]
    }
  }
  render() {
     const {tasks} = this.state;
    return (
      <div className='App'>
        <h1 className='top'> Active tasks: {tasks.length}</h1>
      </div>
    )
  }
}
