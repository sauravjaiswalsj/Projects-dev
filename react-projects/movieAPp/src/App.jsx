import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<h1>Hello World</h1>}></Route>
          <Route path="movie/:id" element={<h1>Movie Details</h1>}></Route>
          <Route path="movie/:type" element={<h1>Movie list page</h1>}></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
