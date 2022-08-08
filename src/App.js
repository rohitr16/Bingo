import { BrowserRouter, Route} from 'react-router-dom';
import DashBoard from './components/Dashboard.js';
import Board  from './components/Board.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/board" component={Board} />
        <Route path="/error" component={Error} />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;