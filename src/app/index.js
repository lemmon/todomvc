import App from './App'

window.log = (...args) => {
  console.log('👋', ...args)
  return args[0]
}

app.setState({
  tick: 0,
  tasks: [],
  filter: 0,
})
app.mount(App, '#app')
