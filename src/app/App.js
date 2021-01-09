import app from '../rege/app'
import Form from './partials/Form'
import TasksList from './partials/TasksList'

const $filters = {
  ALL: () => true,
  ACTIVE: (x) => !x.completed,
  COMPLETED: (x) => x.completed,
}

const filters = [
  ['All', $filters.ALL],
  ['Active', $filters.ACTIVE],
  ['Completed', $filters.COMPLETED],
]

const renderActiveCount = (n) => `${n} ${n === 1 ? 'item' : 'items'} left`

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
      <TasksList
        class="p05"
        model={state.tasks}
        filter={filters[state.filter][1]}
      />
      {state.tasks.length > 0 && (
        <div class="row">
          <div class="p05">
            {renderActiveCount(state.tasks.filter($filters.ACTIVE).length)}
          </div>
          <div class="p05">
            {filters.map(([label], index) => (
              <button
                class={index === state.filter ? 'bold' : ''}
                onclick={() => {
                  app.setState({ filter: index })
                  app.render()
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
)
