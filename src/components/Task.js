import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
  return (
    <div className='task'>
        <h3>{task.text}  
        <FaTimes 
        style={{ color : 'red', cusor : 
        'pointed' }}
        onClick = {() => onDelete(task.id)}
        /></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task