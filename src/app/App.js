import app from '../rege/app'
import Form from './partials/Form'
import TasksList from './partials/TasksList'

export default ({ state }) => (
  <div id="app" class="minvh col">
    <div class="ma p15">
      <ul class="row">
        <li class="p05">{state.tick}</li>
        <li class="p05">
          <a
            class="block ul"
            href="#"
            onclick={(e) => {
              e.preventDefault()
              app.state.tick++
              app.render()
            }}
          >
            refresh
          </a>
        </li>
        <li class="p05">
          <a
            class="block ul"
            href="#"
            onclick={(e) => {
              e.preventDefault()
              app.setState({
                tasks: state.tasks.sort(() => 0.5 - Math.random()),
              })
              app.render()
            }}
          >
            shuffle
          </a>
        </li>
      </ul>
      <Form class="p05" />
      <TasksList class="p05" tasks={state.tasks} />
    </div>
  </div>
)
