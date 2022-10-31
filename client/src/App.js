
import './App.css';
import AddCourse from './Components/AddCourse';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from './Components/Content';
import AddContent from './Components/AddContent';
import ContentView from './Components/ContentView';
import UpdateCourse from './Components/UpdateCourse';
import UpdateContent from './Components/UpdateContent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/addcourse' element = {<AddCourse />} />
        <Route path='/content' element = {<Content />} />
        <Route path='/addcontent' element = {<AddContent />} />
        <Route path='/contentview' element = {<ContentView />} />
        <Route path='/updatecourse' element = {<UpdateCourse />} />
        <Route path='/updatecontent' element = {<UpdateContent />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
