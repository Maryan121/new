import './App.css';
import AllComponents from './components/allComponents';
import { Routes, Route } from 'react-router-dom';
// import About from './components/about';
// import Projects from './components/projects';
// import Challenges from './components/challenges';
// import Skills from './components/skills';
// import Contact from './components/contact';
import Thankspage from './components/pages/thankspage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <AllComponents />
        <Routes>
          <Route path="/thankspage" element={<Thankspage />} />
        </Routes>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
