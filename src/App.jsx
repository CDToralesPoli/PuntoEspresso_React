import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error404 from './components/404/404'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App () {

  return (
    <>
      <BrowserRouter>
        <NavBar className='navBar' />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
          <Route path='/producto/:id' element={<ItemDetailContainer />} />
          <Route path='/*' element={<Error404 /> } />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
