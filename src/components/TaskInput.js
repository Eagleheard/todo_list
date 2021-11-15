import React from "react";



class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input: ''
        };
    }
      AddTask = () => {
            const {input} = this.state;
            if (input) {
            this.props.addTask(input);
            this.setState({input: '' });
            }
        };
       InputChange = (event) => {
            this.setState({input: event.target.value})
        };

    render () {
        const {input} = this.state;
        return(
            <div className='task-input'>
                <input onChange={this.InputChange} value={input}></input>
                <button onClick={this.AddTask}>ADD</button>
            </div>
        )
    }
}
export default TaskInput;