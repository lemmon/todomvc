import App from './App'

window.log = (...args) => {
  console.log('👋', ...args)
  return args[0]
}

app.setState({
  tasks: [],
})
app.mount(App, '#app')
