import AllComponents from './components/allComponents';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <AllComponents />
      </div>
    </BrowserRouter>
  );
}

export default App;
