import './App.css'
import Counter from './components/Counter'
import CounterImproved from './components/CounterImproved'

function App() {
  return (
    <div className="App">
      <h1>useReducer</h1>
      <hr />
      <Counter />
      <CounterImproved />
    </div>
  )
}

export default App
