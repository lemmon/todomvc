import TaskItem from '../components/TaskItem'

const renderEmpty = () => (
  <div>
    <p class="lh4 black-60">No tasks.</p>
  </div>
)

const renderTasks = ({ tasks }) => (
  <div>
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} $task={task} />
      ))}
    </ul>
  </div>
)

export default ({ tasks }) =>
  tasks.length ? renderTasks({ tasks }) : renderEmpty()
