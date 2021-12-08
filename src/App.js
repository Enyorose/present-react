import Header from './components/Header';
import Test from './components/Test'
import { useState } from 'react'
import Loop from './components/Loop';

function App() {
  const [items] = useState([
    {id: 1, name: 'Mickey', description: 'Hello World'},
    {id: 2, name: 'Goofy', description: 'React is fun!'},
    {id: 3, name: 'Pluto', description: 'Or is it?'}
  ])
  
  return (
    <div>
      <Header />
      <Test />
      <h2>This is a Loop</h2>
      <Loop items={items} />
    </div>
  );
}

export default App;
