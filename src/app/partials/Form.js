import { v4 as uuid } from 'uuid'

export default () => (
  <form method="post" onsubmit={handleSubmit}>
    <input type="text" name="taskName" />
    <button type="submit">Add</button>
  </form>
)

function handleSubmit(e) {
  e.preventDefault()
  const form = e.target
  const input = form.elements.taskName
  const value = input.value.trim()
  input.value = ''
  if (!value) return
  app.state.tasks.push({ id: uuid(), name: value })
  app.render()
}
