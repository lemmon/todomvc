import createElement from './createElement'

export default class extends HTMLElement {
  #state = {}

  constructor() {
    super()
    // state
    this.setState(this.initialState)
    // render
    if (this.render) {
      const _root = this.root || this
      const _render = this.render
      Object.defineProperty(this, 'render', {
        value: () =>
          app.morph(
            _root,
            createElement(
              'div',
              null,
              _render.call(this, this.$props, this.#state)
            ),
            {
              childrenOnly: true,
            }
          ),
      })
    }
  }

  get $state() {
    return this.#state
  }

  connected() {}

  connectedCallback() {
    this.setState(this.$props.initialState)
    this.connected()
    if (!this.render) return
    this.render()
  }

  setState(...newStates) {
    Object.assign(this.#state, ...newStates)
  }

  attr(name) {
    return this.getAttribute(name)
  }
}
