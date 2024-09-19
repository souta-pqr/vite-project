import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#FFFFFF")
  const [colorHistory, setColorHistory] = useState<string[]>([])

  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    setColor("#" + randomColor)
    setColorHistory(prevHistory => [randomColor, ...prevHistory].slice(0, 5))
  }

  useEffect(() => {
    generateRandomColor()
  }, [])

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <div className="content">
        <h1>Color Generator</h1>
        <div className="color-display">
          Current Color: <span style={{ color: color }}>{color}</span>
        </div>
        <button onClick={generateRandomColor}>
          Generate New Color
        </button>
        <div className="color-palette">
          {colorHistory.map((c, index) => (
            <div 
              key={index} 
              className="color-swatch"
              style={{ backgroundColor: `#${c}` }}
              onClick={() => setColor(`#${c}`)}
              title={`#${c}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App