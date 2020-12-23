import Component from '../../rege/Component'

export default class extends Component {
  get initialState() {
    return {}
  }

  render() {
    return (
      <li class="lh4">
        <span class="black-20">&rarr;</span> {this.task.name}{' '}
        <a
          class="ul"
          href="#"
          onclick={(e) => {
            e.preventDefault()
            log(this.task)
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
