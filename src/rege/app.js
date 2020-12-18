import morph from './morph'

const rootPath = window.rootPath || ''

const HISTORY_OBJECT = {}
const app = {
  // path
  path: parsePath(location.pathname, rootPath),
  query: parseQuery(location),
  querystring: location.search,
  // state
  state: {},
}

app.setState = (...newStates) => Object.assign(app.state, ...newStates)

app.href = (path, query) =>
  ((path && rootPath + path.replace(/(.)\/+$/, '$1')) ||
    (app.path && rootPath + app.path[0]) ||
    rootPath + '/') + appendQuery(query)

// navigate
window.addEventListener('click', (e) => {
  if (
    (e.button && e.button !== 0) ||
    e.ctrlKey ||
    e.metaKey ||
    e.altKey ||
    e.shiftKey ||
    e.defaultPrevented
  ) {
    return
  }

  const anchor = e.target.closest('a[href]')
  if (!anchor || anchor.target) return

  e.preventDefault()

  if (anchor.href !== location.href) {
    document.activeElement.blur()
    history.pushState(HISTORY_OBJECT, null, anchor.href)
    app.path = parsePath(anchor.pathname, rootPath)
    app.query = parseQuery(location)
    app.querystring = location.search
    app.render()
  }
})

// history
window.onpopstate = () => {
  app.path = parsePath(location.pathname, rootPath)
  app.query = parseQuery(location)
  app.querystring = location.search
  app.render()
}

// redirects
app.redir = (path, query) => {
  history.pushState(HISTORY_OBJECT, null, app.href(path, query))
  app.path = parsePath(location.pathname, rootPath)
  app.query = parseQuery(location)
  app.querystring = location.search
  app.render()
}

// mount
app.mount = (App, target) => {
  app.App = App
  app.target = document.querySelector(target)
  app.render()
}

// render
app.render = () => {
  morph(app.target, app.App(app), {
    getNodeKey: (node) => {
      if (node.nodeType !== 1) return
      return node.getAttribute('key') || node.getAttribute('id') || node.id
    },
    onBeforeElChildrenUpdated: (fromEl) => !fromEl.update || fromEl.update(),
  })
}

function parsePath(pathname, rootPath) {
  const path =
    pathname.indexOf(rootPath) === 0
      ? pathname.substr(rootPath.length) || '/'
      : null
  return [path, ...path.split('/').slice(1)]
}

function parseQuery(location) {
  return Array.from(new URL(location).searchParams.entries()).reduce(
    (acc, curr) =>
      Object.assign(acc, {
        [curr[0]]: curr[1],
      }),
    {}
  )
}

function appendQuery(query) {
  if (!query) return ''
  const querystring = new URLSearchParams(
    Object.entries(query).filter((curr) => curr[1])
  ).toString()
  return querystring ? '?' + querystring : ''
}

export default app
