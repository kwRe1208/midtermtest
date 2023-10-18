import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import newshop from './components/newshop.component';
import Navigation from './components/navigation.component';
import newproduct from './components/newproduct.component';


function App() {
  return (
    <Router>
    <Navigation />
    
  

  <Routes>
    <Route path="/" Component={newshop} />
    <Route path="/newProduct" Component={newproduct}  />
  </Routes>

  </Router>


  );
}

export default App;
