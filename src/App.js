import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';
import UseRef from './pages/UseRef';
import UseCallback from './pages/UseCallback';
import UseContext from './pages/UseContext';
import UseReducer from './pages/UseReducer';
import UseCustom from './pages/UseCustom';
import UseMemo from './pages/UseMemo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/usestate' element={<UseState/>} />
        <Route path='/useeffect' element={<UseEffect/>}/>
        <Route path='/useref' element={<UseRef/>}/>
        <Route path='/usecallback' element={<UseCallback/>}/>
        <Route path='/usecontext' element={<UseContext/>}/>
        <Route path='/usereducer' element={<UseReducer/>}/>
        <Route path='/usememo' element={<UseMemo/>}/>
        <Route path='/custom' element={<UseCustom/>}/>
      </Routes>
    </div>
  );
}

export default App;
