import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Register from './components/Login';
import Login from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path = "" element = {<Home />} />
        <Route path = "courses/:id" element = {<SingleCourse />} />
        <Route path = "category/:category" element = {<Courses />} />
        <Route path = "cart" element = {<Cart />} />
        <Route path='register' element={<Register/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='dashboard' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;