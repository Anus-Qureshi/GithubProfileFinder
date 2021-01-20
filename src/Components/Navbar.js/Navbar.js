import {button} from 'react'

import About from '../About'

const Navbar = ({changePageName, pageName}) => {
 const pages = ["Home", "About","News"];
    return (
    <div className="navbar">
     <div className="github-title">Github Profile Finder</div>
     
      <nav>
      <ul className="Header-container-ul">
           {pages.map((page, index) => (
          <li
            key={index}
            onClick={() => changePageName(page)}
            className="li"
          >
        <h3>  {page} </h3>
          </li>
         ))}
      </ul>
      </nav>
  
    </div>
  );
};

export default Navbar;
