// import logo from './logo.svg';
import { useState } from 'react';
import 'components/App/App.css';
import Button from 'components/Button';

function App() {
  const [count, setCount] = useState(0)

  const plus = () => {
    setCount(count + 1)
  }

  const minus = () => {
    setCount(count - 1)
  }

  return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-12'>Счетчик</h1>
            <p className='text-center text-7xl font-bold mt-10'>{count}</p>
                <div className='flex justify-center mt-10'>
                <Button title={"Отнять-1"} changeCount={minus} />
                <Button title={"Прибавить +1"} changeCount={plus} />
                </div>
        </div>
    );
  
}

export default App;
