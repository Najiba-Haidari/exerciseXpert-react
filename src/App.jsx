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
  const API_KEY = "90e977b5d8mshf5f1067f878f899p12c888jsnc176b90ca77c";

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
