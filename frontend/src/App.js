// import Navigation from './components/Navigation';
// import { Home } from './components/Home';
// import Students from './components/Students';
import { Home } from './elements/Home';
import Navigation from './elements/Navigation'
import Students from './elements/Students';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DeleteStudentPage from './elements/DeleteStudent';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/delete/:studentId" element={<DeleteStudentPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
