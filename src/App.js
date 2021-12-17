// import logo from './logo.svg';
import "./App.css";
import Carousel from "./components/Carousel";
// import Homepage from "./components/Homepage";
// import MovieItems from "./components/MovieItems";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import MovieDetails from './components/MovieDetails'
import {BrowserRouter as Router,Routes,Switch,Route} from 'react-router-dom'
function App() {
  return (
    
    <div>
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={[<Carousel/>,<Movies/>]} />
      <Route path='/movies/:id' element={<MovieDetails/>} />
    </Routes>
    </Router>
      {/* <MovieDetails/> */}
      {/* <MovieItems /> */}
      {/* <Homepage /> */}
     
    </div>
  );
}

export default App;
