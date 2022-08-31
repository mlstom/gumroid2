import './App.css';
import {Routes,Route,useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="/*" element={<Home/>} />
    </Routes>
    </div>
  );
}

export default App;
