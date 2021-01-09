import TaskItem from '../components/TaskItem'

export default ({ model, filter }) => {
  const entries = model.filter(filter)

  if (entries.length === 0) return

  return (
    <ul>
      {entries.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          ondelete={() => {
            model.splice(model.indexOf(task), 1)
          }}
          onchange={() => {
            app.render()
          }}
        />
      ))}
    </ul>
  )
}
