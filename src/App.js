import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";import './App.css';
import MainPage from './components/MainPage.js/MainPage';
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/SignUp" element={<SignUp />}/>
         
    </Routes>
  </BrowserRouter>
  );
}

export default App;
