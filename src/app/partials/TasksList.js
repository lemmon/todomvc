import TaskItem from '../components/TaskItem'

const renderEmpty = () => (
  <div>
    <p class="lh4 black-60">No tasks.</p>
  </div>
)

const renderTasks = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        ondelete={() => {
          tasks.splice(tasks.indexOf(task), 1)
          app.render()
        }}
      />
    ))}
  </ul>
)

export default ({ tasks }) =>
  tasks.length ? renderTasks({ tasks }) : renderEmpty()
