import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

import quotesData from './quotes.json'

const randomIndex = Math.floor(Math.random() * quotesData.length)
  
const randomColor = () => {
  let hexNum = "0123456789ABCDEF"
  let hex = "#"
  for (let i = 0; i < 6; i++) {
    hex += hexNum[Math.floor(Math.random() * 16)]
  }

  return hex
}

function App() {
  // const [count, setCount] = useState(0)
  const [quote, setQuote] = useState(() => quotesData[randomIndex].quote)
  const [author, setAuthor] = useState(() => quotesData[randomIndex].author)
  const [color, setColor] = useState(randomColor)

  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length)
    setQuote(quotesData[randomIndex].quote)
    setAuthor(quotesData[randomIndex].author)
    setColor(randomColor)
  }

  return (
    <>
      <div className='container d-flex justify-content-center align-items-center container-size transition' style={{ backgroundColor: color }}>
        <div className='card border clamp-card'>
          <div className='card-body'>
            <h1 className='card-title text-center quote-size transition' style={{ color: color }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='svg-quote'><path fill="currentColor" d="M11.192 15.757c0-.88-.23-1.618-.69-2.217c-.326-.412-.768-.683-1.327-.812c-.55-.128-1.07-.137-1.54-.028c-.16-.95.1-1.956.76-3.022c.66-1.065 1.515-1.867 2.558-2.403L9.372 5c-.8.396-1.56.898-2.26 1.505c-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69s-.345 2.04-.216 3.1c.168 1.4.62 2.52 1.356 3.35C5.837 18.58 6.754 19 7.85 19c.965 0 1.766-.29 2.4-.878c.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217c-.326-.42-.77-.692-1.327-.817c-.56-.124-1.073-.13-1.54-.022c-.16-.94.09-1.95.752-3.02c.66-1.06 1.513-1.86 2.556-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505a11.29 11.29 0 0 0-1.894 2.094c-.556.79-.97 1.68-1.24 2.69a8.042 8.042 0 0 0-.217 3.1c.166 1.4.616 2.52 1.35 3.35c.733.834 1.647 1.252 2.743 1.252c.967 0 1.768-.29 2.402-.877c.627-.576.942-1.365.942-2.368v.011z"/></svg>
              { quote }
            </h1>
            <p className='card-text text-end transition' style={{ color: color }}>- { author }</p>
            <div className='d-flex align-items-center justify-content-between'>
              <div>
                <a href="#" className='card-link'>Link</a>
                <a href="#" className='card-link'>Link</a>                
              </div>
              <button type='button' className='btn transition' style={{ backgroundColor: color, color: "#ffffff" }} onClick={fetchQuote}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
