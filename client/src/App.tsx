import { useState } from 'react'
import './App.css'
import { $host } from './http'

function App() {
  const [longLink, setLongLink] = useState('')
  const [shortLink, setShortLink] = useState('')

  const getlink = async () => {
    const response = await $host.post('create-link', { longLink })
    setShortLink(response.data.shortLink)
  }

  const setLongLinkOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const longLink = event.target.value
    setLongLink(longLink)
  }

  return (
    <>
      <input type="text" onChange={setLongLinkOnChange} value={longLink}/>
      <button onClick={getlink}>Тест2</button>
      <a>{shortLink}</a>
    </>
  )
}

export default App
