import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App () {

  return (
    <>
      <NavBar className='navBar' />
      <ItemListContainer className='itemListContainer' greeting={'Bienvenido a Punto Espresso'} slogan={'Un café para cada momento del día'}/>
    </>
  )

}

export default App
