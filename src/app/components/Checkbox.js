import Component from '../../rege/Component'

export default class extends Component {
  get initialState() {
    return {
      checked: false,
    }
  }

  render(_props, { checked }) {
    return (
      <button onclick={(e) => this.handleInput(e)}>
        {checked ? '✔' : '·'}
      </button>
    )
  }

  get checked() {
    return this.$state.checked
  }

  updateState() {
    if (typeof this.$props.checked === 'boolean') {
      this.setState({
        checked: this.$props.checked,
      })
    }
  }

  connected() {
    this.updateState()
  }

  update() {
    this.updateState()
    this.render()
    return false
  }

  handleInput() {
    this.$state.checked = !this.$state.checked
    this.toggleAttribute('checked', this.$state.checked)
    this.render()
    this.dispatchEvent(new Event('input', { bubbles: true, cancelable: false }))
    this.dispatchEvent(
      new Event('change', { bubbles: true, cancelable: false })
    )
  }
}
