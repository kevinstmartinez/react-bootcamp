import './App.css';
import Message  from  './Message.js'

const App = () =>{
  return (
    <div className="App">
      <Message color='red' message='Working on' />
      <Message color='green' message='Working on' />
    </div>
  )
}

export default App
