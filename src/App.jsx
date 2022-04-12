// Se utiliza este archivo como router, para ello se utiliza la libreria de react-router-dom, en su version 6. se puede ver mas sobre la libreria en: https://reactrouter.com/docs/en/v6/getting-started/overview

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Los layouts serán nuestros masters pages para este proyecto
import Layout from './layouts/Layout'
import Session from './layouts/Session'

// paginas
import Home from './pages/Home'
import Login from './pages/Login'
import Detail from './pages/Detail'
import Favorite from './pages/Favorite'
import CreateSession from './pages/CreateSession'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Session />}>
          <Route index element={<Login />} />
          <Route path='Sign-up' element={<CreateSession />} />
        </Route>

        <Route path='/jhofpelis' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='detail' element={<Detail />} />
          <Route path='favorites' element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
