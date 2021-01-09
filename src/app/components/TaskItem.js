import Component from '../../rege/Component'
import Checkbox from './Checkbox'

export default class extends Component {
  get initialState() {
    return {}
  }

  render({ task }) {
    return (
      <li class="lh4">
        <Checkbox
          checked={task.completed}
          oninput={({ target }) => {
            task.completed = target.checked
            this.render()
          }}
        />
        <span class={task.completed ? 'lt color-black-40' : ''}>
          {task.name}
        </span>{' '}
        <button
          onclick={() => {
            this.dispatchEvent(
              new Event('delete', { bubbles: true, cancelable: false })
            )
            this.dispatchEvent(
              new Event('change', { bubbles: true, cancelable: false })
            )
          }}
        >
          delete
        </button>
      </li>
    )
  }

  update() {
    this.render()
    return false
  }
}
