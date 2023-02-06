import { useEffect } from 'react';

//* API
import { getData } from './services/api';

function App() {
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getData();
      console.log(data);
    };

    fetchAPI();
  }, []);

  return (
    <div className='App'>
      <h1>Countries</h1>
    </div>
  );
}

export default App;
