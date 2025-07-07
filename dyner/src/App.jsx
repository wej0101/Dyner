import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Developers from './Developers';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Projects from './Projects';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
