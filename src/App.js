import './App.css';
import Search from './search/search';
import ShowItems from './showItems/showItems';
import { useState } from 'react';


function App() {
  const [items] = useState([
    {
      id: 1,
      name: "Item 1",
      price: 100,
    },
    {
      id: 2,
      name: "Item 2",
      price: 200,
    },
    {
      id: 3,
      name: "Item 3",
      price: 300,
    },
    {
      id: 4,
      name: "Item 4",
      price: 400,
    }
  ]);
  return (
    <div className="App">
      <Search />
      <ShowItems items={items} />
    </div>
  );
}

export default App;
