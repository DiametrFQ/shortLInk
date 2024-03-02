import { useState } from 'react'
import './App.css'
import { $host } from './http'

function App() {
  const [longLink, setLongLink] = useState('')
  const [shortLink, setShortLink] = useState('')

  const testClick = async () => {
    const response = await $host.get('/')
    console.log(response.data)
  }

  const getlink = async () => {
    const response = await $host.post('/create-link', { longLink })
    const path = response.data.shortLink
    setShortLink(`http://localhost:3001/${path}`)
  }

  const setLongLinkOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const longLink = event.target.value
    setLongLink(longLink)
  }

  return (
    <>
      <input type="text" onChange={setLongLinkOnChange} value={longLink}/>
      <button onClick={testClick}>Тест1</button>
      <button onClick={getlink}>Тест2</button>
      <a>{shortLink}</a>
    </>
  )
}

export default App
