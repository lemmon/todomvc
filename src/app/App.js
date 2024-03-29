import '../css/index.css'
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
      <Form class="p05" />
      <TasksList
        class="p05"
        model={state.tasks}
        filter={filters[state.filter][1]}
      />
      {state.tasks.length > 0 && (
        <div>
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
          <div class="p05">
            <button
              onclick={() => {
                app.setState({
                  tasks: state.tasks.filter((x) => !x.completed),
                })
                app.render()
              }}
            >
              Clear completed
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
)
