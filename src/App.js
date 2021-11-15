import React from "react";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 0, title: 'Create todo app', done: false },
        { id: 1, title: 'Wash window', done: true },
        { id: 2, title: 'Go for a walk with smbd', done: false }
      ]
    }
  }
  addTask = (task) => {
    this.setState( state => {
      let {tasks} = state;
      tasks.push({
        id: tasks.length !== 0 ? task.length : 0,
        title: task,
        done: false
      });
      return tasks;
    })
      
  }
  DoneTask = (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      tasks[index].done = true;
      return tasks;
    })
  }
  DeleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
  })
  }
  render() {
    const { tasks } = this.state;
    const ActiveTask = tasks.filter(task => !task.done)
    const DoneTask = tasks.filter(task => task.done)
    return (
      <div className='App'>
        <h1 className='top'> Active tasks: {ActiveTask.length}</h1>
        {[...ActiveTask, ...DoneTask].map(tasks => (
          <Task
            DeleteTask={() => this.DeleteTask(tasks.id)}
            DoneTask={() => this.DoneTask(tasks.id)}
            tasks={tasks}
            key={tasks.id}>
          </Task>))}
          <TaskInput addTask={this.addTask}></TaskInput>
      </div>
    )
  }
}
export default App;
