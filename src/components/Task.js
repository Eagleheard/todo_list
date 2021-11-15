const Task = ({tasks, ...props}) => {

    const ActionBtn = () => {
        return (
        <div className='action-btn'>{!tasks.done ?
         <p onClick={props.DoneTask}>✅</p> :
         <p onClick={props.DeleteTask}>❌</p>}</div>
        )
    }
    const className = 'task ' + (tasks.done ? 'task-done' : '');
 return (
     <div className={className}>
         <p>{tasks.title}</p>
         <ActionBtn></ActionBtn>
     </div>
 );
}
export default Task;