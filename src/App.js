import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// Pages Folder
import Counter from './Pages/Counter';

// Component Folder
import Header from "./Components/Header";


// CSS Folder
import "./CSS/Counter.css";
import Rough from './Pages/Rough';


// Images


function App() {
  return (

    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Counter />} />
          {/* <Route path="/" element={<Rough />} /> */}
         
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>

  );
}

export default App;
