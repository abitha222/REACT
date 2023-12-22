import { BrowserRouter,Route,Routes } from 'react-router-dom';
import RenderingList from './component/RenderingList';
import './App.css';
import ButtonMUI from './component/ButtonMUI';
import GridMUI from './GridMUI';
import InlineStyling from './component/InlineStyling';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RenderingList/>}/>
      </Routes>
      </BrowserRouter>
      <ButtonMUI/>
      <GridMUI/>
      <InlineStyling/>
    </div>
  );
}

export default App;