import Component from '../../rege/Component'

export default class extends Component {
  get initialState() {
    return {}
  }

  render({ task }) {
    return (
      <li class="lh4">
        <span class={task.completed ? 'lt color-black-40' : ''}>
          {task.name}
        </span>{' '}
        <a
          class="ul"
          href="#"
          onclick={(e) => {
            e.preventDefault()
            log(task)
          }}
        >
          click
        </a>{' '}
        <button
          onclick={() => {
            this.dispatchEvent(
              new Event('delete', { bubbles: true, cancelable: false })
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
