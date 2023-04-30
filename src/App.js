import './App.css';
import Login from './component/login';
import Register from './component/registration';
import Welcome from './component/welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resistration" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
