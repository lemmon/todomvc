import App from './App'

window.log = (...args) => {
  console.log('👋', ...args)
  return args[0]
}

app.setState({
  tick: 0,
  tasks: [],
})
app.mount(App, '#app')
