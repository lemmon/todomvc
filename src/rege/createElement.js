export default (node, props, ...children) => {
  // props
  const { class: $class, style: $style, ...$props } = props || {}
  // create element
  const el =
    typeof node === 'string'
      ? document.createElement(node)
      : node.prototype
      ? Object.assign(document.createElement(customTagName(node)), { $props })
      : node($props, app.state)
  if (!el) return
  // class
  if ($class) {
    el.classList.add(
      ...(Array.isArray($class) ? $class : $class.split(' ').filter((x) => x))
    )
  }
  // style
  if (typeof $style === 'string') {
    el.style = $style
  } else if ($style) {
    Object.assign(el.style, $style)
  }
  // props
  if ($props) {
    Object.entries($props).forEach(([key, val]) => {
      if (key.charAt(0) === '$') {
        el[key.substr(1)] = val
      } else if (key.substr(0, 2) === 'on') {
        el.addEventListener(key.substr(2), val)
      } else if (typeof val === 'boolean') {
        el.toggleAttribute(key, val)
      } else if (val && typeof val !== 'object' && typeof val !== 'function') {
        el.setAttribute(key, val)
      }
    })
  }
  // children
  children.flat().forEach((child) => {
    if (!child && typeof child !== 'number') return
    el.appendChild(
      typeof child === 'object' ? child : document.createTextNode(child)
    )
  })
  // return element
  return el
}

const reg = new Set()

function customTagName(Node) {
  const tagName = `rege-${Node.name.toLowerCase()}`
  // register new
  if (!reg.has(Node)) {
    customElements.define(tagName, Node)
    reg.add(Node)
  }
  // return tag name
  return tagName
}
