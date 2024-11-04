import { useState, useEffect } from 'react'
import Foo from './_com_foo.jsx'
// import './App.css'
import './_foo.styl'

const storedData = +localStorage.getItem('asdf')

function App() {
  const [count, setCount] = useState(storedData ? storedData : 4)
  
  useEffect(() => {
    localStorage.setItem('asdf', count)
  }, [count])

  const handleClearClick = () => {
    setCount(4)
    localStorage.clear()
  }

  return (
    <>
      <div className="foos__wrap"> 
        <h2>In the storage at the page load: {storedData}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={ () => handleClearClick() }>
          •
        </button>
      </div>
        <div className="foos"> 
        <Foo prop={count} />
        <Foo prop={count} />
        <Foo prop={count} />
        <Foo prop={count} />
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default App
