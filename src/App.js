import './App.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import Calc from './components/Calc/Calc';
import Edge from './components/Edge/Edge';
import Garant from './components/Garant/Garant';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Preview from './components/Preview/Preview';
import Tab from './components/Tab/Tab';
import TabContent from './components/FAQ/FAQ';
import Forma from './components/Forma/Forma';
import Footer from './components/Footer/Footer';
 
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
      <Preview/>
      <Tab/>
      <Edge/>
      <Calc/>
      <Garant/>
      <TabContent/>
      <Forma/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
