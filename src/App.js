import './App.css';
import Footbar from './components/Footbar';
import Header from './components/Header';
import MadeWith from './components/MadeWith';
import Navbar from './components/Navbar';
import TopProducts from './components/TopProducts';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <TopProducts/>
    <MadeWith/>
    <Footbar/>
    </>
  );
}

export default App;
