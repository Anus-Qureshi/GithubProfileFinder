import './App.css';
import News from './Components/News'
import About from './Components/About'
import react ,{ useState } from 'react';
import Footer from './Components/Footer/Footer'
import logo from "./logo.png"
import Profile from './Components/Profile';
import Navbar from './Components/Navbar.js/Navbar'
function App() {
  const [page, setPage] = useState("Home");

  const setPageName = (pageName) => setPage(pageName);
return (
    <div className="App">
  
   <header className="App-header">
   <Navbar changePageName={setPageName} pageName={page} />
   <img src={logo} className="App-logo" alt="App-logo"/>
      <br />
      <br />
      <br />
      {page === "Home" && <Profile />}
      {page === "About" && <About />}
      {page === "News" && <News />}

    


<Footer />     
   </header>
      </div>
  );
}

export default App;