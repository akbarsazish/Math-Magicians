import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQoutes from './components/DisplayQoutes';

import Home from './components/Home';

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quots" element={<DisplayQoutes />} />
      </Routes>
    </div>
  );
}

export default App;
