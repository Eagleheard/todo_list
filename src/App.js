import React from "react";
import Task from "./components/Task";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: [
        { id: 0, title: 'Create todo app', done: false },
        { id: 1, title: 'Wash window', done: true },
        { id: 2, title: 'Go for a walk with smbd', done: false }
      ]
    }
  }
  DoneTask = (id) => {
    const index = this.state.task.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {task} = state;
      task[index].done = true;
      return task;
    })
  }
  DeleteTask = (id) => {
    const index = this.state.task.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {task} = state;
      delete task[index];
    })
  }
  render() {
    const { task } = this.state;
    const ActiveTask = task.filter(task => !task.done)
    const DoneTask = task.filter(task => task.done)
    return (
      <div className='App'>
        <h1 className='top'> Active tasks: {ActiveTask.length}</h1>
        {[...ActiveTask, ...DoneTask].map(task => (
          <Task
            DeleteTask={() => this.DeleteTask(task.id)}
            DoneTask={() => this.DoneTask(task.id)}
            task={task}
            key={task.id}>
          </Task>))}
      </div>
    )
  }
}
export default App;
