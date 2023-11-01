import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from'react-router-dom';
import TeamsList from './components/TeamsList'
import VenuesList from './components/VenuesList'
import TeamDetails from './components/TeamDetails'
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome To React</h1>
        </header>
        <Link to="/VenuesList">Venues</Link><br></br>
        <Link to="/TeamsList">Teams</Link><br></br>
        <Link to="/TeamDetails">Details</Link><br></br>
    
    <Routes>
      <Route exact path="/VenuesList" element={<VenuesList />}></Route>
      <Route exact path="/TeamsList" element={<TeamsList />}></Route>
      <Route exact path="/TeamDetails" element={<TeamDetails />}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
