// import logo from './logo.svg';
import "./App.css";
import Carousel from "./components/Carousel";
// import Homepage from "./components/Homepage";
// import MovieItems from "./components/MovieItems";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import MovieDetails from './components/MovieDetails'
function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Movies />
      {/* <MovieDetails/> */}
      {/* <MovieItems /> */}
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
