import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddCourse from './components/AddCourse';
import ViewAll from './components/ViewAll';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddCourse/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
