import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="header">
        <input type="text" placeholder='Add a new task' />
        <button>➕</button>
      </div>
      <div className="content">
        <p>Tasks to do <span>- 3</span></p>
        <div className="todo">
          <p>To study React fundamentals</p>
          <div className="btn">
            <button><img src="/img/Group 1.png" alt="" /></button>
            <button><img src="/img/Group 2.png" alt="" /></button>
          </div>
        </div>
        <div className="todo">
          <p>To study React fundamentals</p>
          <div className="btn">
            <button><img src="/img/Group 1.png" alt="" /></button>
            <button><img src="/img/Group 2.png" alt="" /></button>
          </div>
        </div>
        <div className="todo">
          <p>To study React fundamentals</p>
          <div className="btn">
            <button><img src="/img/Group 1.png" alt="" /></button>
            <button><img src="/img/Group 2.png" alt="" /></button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
