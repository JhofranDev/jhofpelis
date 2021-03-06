// Se utiliza este archivo como router, para ello se utiliza la libreria de react-router-dom, en su version 6. se puede ver mas sobre la libreria en: https://reactrouter.com/docs/en/v6/getting-started/overview

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Esta layout sera nuestra máster page
import Layout from './layouts/Layout'

// paginas
import Home from './pages/Home'
import Detail from './pages/Detail'
import Favorite from './pages/Favorite'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='favorites' element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
