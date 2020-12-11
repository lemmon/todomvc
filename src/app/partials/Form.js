export default () => (
  <div>
    <form method="post" onsubmit={handleSubmit}>
      <input name="taskName" type="text" />
      <button type="submit">Add</button>
    </form>
  </div>
)

function handleSubmit(e) {
  e.preventDefault()
  const form = e.target
  const input = form.elements.taskName
  const value = input.value
  input.value = ''
  if (!value) return
  app.state.tasks.push(value)
  app.render()
}
