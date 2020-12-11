const renderEmpty = () => (
  <div>
    <p class="lh4 black-60">No tasks.</p>
  </div>
)

const renderTasks = ({ tasks }) => (
  <div>
    <ul>
      {tasks.map((task) => (
        <li class="lh4">
          <span class="black-20">&rarr;</span> {task}
        </li>
      ))}
    </ul>
  </div>
)

export default ({ tasks }) =>
  tasks.length ? renderTasks({ tasks }) : renderEmpty()
