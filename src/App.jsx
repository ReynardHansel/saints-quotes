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
  const [quote, setQuote] = useState(() => quotesData[randomIndex].quote)
  const [author, setAuthor] = useState(() => quotesData[randomIndex].author)
  const [color, setColor] = useState(randomColor)

  const fetchQuote = () => {
    const p = document.querySelector('.card-text')
    const h1 = document.querySelector('.card-title')

    // set opacity to 0 after button click
    p.style.opacity = 0
    h1.style.opacity = 0

    //color is fetched first (color changes first) before text
    setColor(randomColor)

    // wait until opacity becomes 0 (for 600ms), fetch the data while the opacity = 0, make opacity = 1 again after the data is fetched (= the quote has changed now)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotesData.length)
      setQuote(quotesData[randomIndex].quote)
      setAuthor(quotesData[randomIndex].author)

      p.style.opacity = 1
      h1.style.opacity = 1
    }, 600);
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center container-size transition' style={{ backgroundColor: color }}>
        <div className='card border clamp-card'>
          <div className='card-body' id="quote-box">
            <h1 className='card-title text-center quote-size transition' id="text" style={{ color: color }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='svg-quote'><path fill="currentColor" d="M11.192 15.757c0-.88-.23-1.618-.69-2.217c-.326-.412-.768-.683-1.327-.812c-.55-.128-1.07-.137-1.54-.028c-.16-.95.1-1.956.76-3.022c.66-1.065 1.515-1.867 2.558-2.403L9.372 5c-.8.396-1.56.898-2.26 1.505c-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69s-.345 2.04-.216 3.1c.168 1.4.62 2.52 1.356 3.35C5.837 18.58 6.754 19 7.85 19c.965 0 1.766-.29 2.4-.878c.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217c-.326-.42-.77-.692-1.327-.817c-.56-.124-1.073-.13-1.54-.022c-.16-.94.09-1.95.752-3.02c.66-1.06 1.513-1.86 2.556-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505a11.29 11.29 0 0 0-1.894 2.094c-.556.79-.97 1.68-1.24 2.69a8.042 8.042 0 0 0-.217 3.1c.166 1.4.616 2.52 1.35 3.35c.733.834 1.647 1.252 2.743 1.252c.967 0 1.768-.29 2.402-.877c.627-.576.942-1.365.942-2.368v.011z"/></svg>
              { quote }
            </h1>
            <p className='card-text text-end transition py-3' id="author" style={{ color: color }}>- { author }</p>
            <div className='d-flex align-items-center justify-content-between'>
              <div>
                <a href="twitter.com/intent/tweet" target='_blank' className='card-link' id="tweet-quote">
                  <button type='button' className='btn transition' style={{ backgroundColor: color }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='svg-link'><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg>
                  </button>
                </a>
                <a href="https://www.instagram.com/reynardhansel/" target='_blank' className='card-link'>
                  <button type='button' className='btn transition' style={{ backgroundColor: color }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='svg-link' viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>
                  </button>
                </a>
              </div>
              <button type='button' className='btn transition' id="new-quote" style={{ backgroundColor: color, color: "#ffffff" }} onClick={fetchQuote}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
