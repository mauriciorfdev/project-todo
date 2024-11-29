import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NavBar from './components/NavBar'
import PostDog from './components/PostDog'
import UpdateDog from './components/updateDog'
import NoMatch from './components/NoMatch'

function App() {

  return (
    <Box minH={"100vh"}>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='create' element={<CreatePage />} ></Route>
        <Route path='dog' element={<PostDog />} ></Route>
        <Route path='dog/:id' element={<UpdateDog /> }></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
    </Box>
  )
}

export default App
