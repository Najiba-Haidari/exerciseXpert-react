import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom";
import Main from './components/Main.jsx'
import SavedEx from './components/SavedEx.jsx'
import Nav from './components/Nav.jsx'
import { useState, useEffect } from 'react'


function App() {
  const [bodyParts, setBodyParts] = useState([])
  const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
  const API_KEY = "a3882e0d78msh0ee7afc0a7eb84fp140078jsn97b32d56c79a";

  const getData = async function () {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      setBodyParts(data)
      // console.log(bodyParts)

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Main getData={getData} bodyParts={bodyParts} setBodyParts={setBodyParts} />} />
        <Route path='/saved' element={<SavedEx />} />
      </Routes>
    </div>
  )
}

export default App
