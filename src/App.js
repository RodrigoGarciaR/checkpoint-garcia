
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greetings='Bienvenidos a Checkpoint'></ItemListContainer>
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
    </div>
  );
}

export default App;
