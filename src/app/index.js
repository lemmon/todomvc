import App from './App'

window.log = (...args) => {
  console.log('👋', ...args)
  return args[0]
}

app.setState({
  tasks: [],
  filter: 0,
})
app.mount(App, '#app')
