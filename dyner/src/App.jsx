import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Developers from './Developers';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
    </BrowserRouter>
  );
}
