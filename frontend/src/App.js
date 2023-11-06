// import Navigation from './components/Navigation';
// import { Home } from './components/Home';
// import Students from './components/Students';
import { Home } from './elements/Home';
import Navigation from './elements/Navigation'
import Students from './elements/Students';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
