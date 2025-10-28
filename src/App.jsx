import React, { useState } from 'react'
import './App.css'

//  nazwa klasy: App
//  pola: tytul  - przechowuje tytuł filmu, rodzaj - przechowuje rodzaj filmu
//  metody: Submit - obsługuje wysyłanie formularza
//  informacje: aplikacja umożliwia dodanie filmu z tytułem i rodzajem, wyswietla dane w konsoli
//  autor: 12345678911

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
          <label>Tytul filmu</label><br/>
          <input id="tytul" value={tytul} onChange={(event) => Tytul(event.target.value)}/><br/>
          <label>Rodzaj</label><br/>
          <select id="rodzaj" value={rodzaj} onChange={(event) => Rodzaj(event.target.value)}>
            <option value=""></option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sensacyjny</option>
            <option value="4">Horror</option>
          </select><br/>
        <button type="submit">Dodaj</button>
      </form>
    </>
  )
}

export default App