import createElement from './createElement'

export default class extends HTMLElement {
  constructor() {
    super()
    // state
    this.$state = {
      ...this.initialState,
    }
    // render
    if (this.render) {
      const _root = this.root
      const _render = this.render
      this.render = () => {
        app.morph(
          _root,
          createElement(
            'div',
            null,
            _render.call(this, this.$props, this.$state)
          ),
          {
            childrenOnly: true,
          }
        )
      }
    }
  }

  get root() {
    return this
  }

  connectedCallback() {
    this.render()
  }

  attr(name) {
    return this.getAttribute(name)
  }
}
