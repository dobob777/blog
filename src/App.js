import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashborad from './Components/Dashborad';
import Navbar from './Components/Navbar';
import LearnMor from './Components/LearnMor';
import AddBlog from './Components/AddBlog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Dashborad /> } />
          <Route path='/learn-mor' element={ <LearnMor /> } />
          <Route path='/add-blog' element={ <AddBlog /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
