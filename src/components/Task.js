const Task = ({task, ...props}) => {

    const ActionBtn = () => {
        return (
        <div className='action-btn'>{!task.done ?
         <p onClick={props.DoneTask}>✅</p> :
         <p onClick={props.DeleteTask}>❌</p>}</div>
        )
    }
    const className = 'task ' + (task.done ? 'task-done' : '');
 return (
     <div className={className}>
         <p>{task.title}</p>
         <ActionBtn></ActionBtn>
     </div>
 );
}
export default Task;