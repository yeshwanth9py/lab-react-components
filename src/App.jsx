import './App.css';

import GallaryFooter from './components/GallaryFooter';
import { Header } from './components/Header.jsx';
import { imageData } from './components/Data.js';
import { Body } from './components/Body.jsx';


function App() {
  return (
    <div>
      <Header/>
      <Body silu={imageData} prop2="variable"/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
