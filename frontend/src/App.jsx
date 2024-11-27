import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NavBarUI from './components/NavBarUI'
import NavBar from './components/NavBar'

function App() {

  return (
    <Box minH={"100vh"}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='create' element={<CreatePage/>} ></Route>
      </Routes>
    </Box>
  )
}

export default App
