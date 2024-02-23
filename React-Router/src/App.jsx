import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>React Router v6 🚀</h1>
        <nav>
  <NavLink to="" className="nav-link">Home</NavLink>
  <NavLink to="heroes" className="nav-link">Heroes</NavLink>
  <NavLink to="about" className="nav-link">About</NavLink>
</nav>
        
      </header>
      
       
        <main>
          <Outlet />
        </main>

        <footer>
          
        </footer>

      
    </div>
  );
};

export default App;
