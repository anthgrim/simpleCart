import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './data/db';
import Cart from './components/cart/Cart';
import List from './components/list/List';

function App() {
  return (

    <div className="backWin">
      <List data={products}></List> <Cart data={products}></Cart>
    </div>

  );
}

export default App;
