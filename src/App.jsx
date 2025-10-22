
import './App.css'

function App() {

  const Submit = () =>  {
      
  }


  return (
    <>
      <label>Tytul Filmu</label><br/>
      <input type="text"/><br/>
      <label>Rodzaj</label><br/>
      <select>
        <option value=""></option>
        <option value="1">Komedia</option>
        <option value="2">Obyczajowy</option>
        <option value="3">Sensacyjny</option>
        <option value="4">Horror</option>
      </select><br/>
      <button onClick={() => Submit()} type="submit">Dodaj</button>
    </>
  ) 
}

export default App
