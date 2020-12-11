import Form from './partials/Form'
import TasksList from './partials/TasksList'

export default () => (
  <div id="app" class="minvh col">
    <div class="ma p15">
      <Form class="p05" />
      <TasksList class="p05" tasks={app.state.tasks} />
    </div>
  </div>
)
