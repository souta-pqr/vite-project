import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#FFFFFF")

  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    setColor("#" + randomColor)
  }

  return (
    <div className="App" style={{ backgroundColor: color, minHeight: '100vh', transition: 'background-color 0.5s' }}>
      <h1>Color Generator</h1>
      <div className="color-display" style={{ 
        backgroundColor: 'white', 
        color: 'black', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '20px'
      }}>
        Current Color: {color}
      </div>
      <button onClick={generateRandomColor} style={{
        fontSize: '1.2em',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer'
      }}>
        Generate New Color
      </button>
    </div>
  )
}

export default App