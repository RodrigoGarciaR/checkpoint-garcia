
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ItemCount from './components/ItemCount';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings='Bienvenidos a Checkpoint' />
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default App;
