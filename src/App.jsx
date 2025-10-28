import React, { useState } from 'react'
import './App.css'

function App() {
  const [tytul, Tytul] = useState('')
  const [rodzaj, Rodzaj] = useState('')

  const Submit = (event) => {
    event.preventDefault()
    console.log(`tytul: ${tytul}; rodzaj: ${rodzaj}`)
  }

  return (
    <>
      <form onSubmit={Submit}>
          <label>Tytul filmu</label>
          <input id="tytul" value={tytul} onChange={(event) => Tytul(event.target.value)}/>
          <label>Rodzaj</label>
          <select id="rodzaj" value={rodzaj} onChange={(event) => Rodzaj(event.target.value)}>
            <option value=""></option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sensacyjny</option>
            <option value="4">Horror</option>
          </select>
        <button type="submit">Dodaj</button>
      </form>
    </>
  )
}

export default App