import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Sidebar.css'; 
import { Link } from "react-router-dom";

function Sidebar() {
  const [showMenu, displayMenu] = useState();
  const [showSubMenu, displaySubMenu] = useState();

  const controlOnClick = (id) => {
    if (showMenu === id) {
      displayMenu(); 
      displaySubMenu(); 
    } else {
      displayMenu(id); 
    }
  };

  const controlOnSubClick = (id2) => {
    if (showSubMenu === id2) {
      displaySubMenu(null); 
    } else {
      displaySubMenu(id2); 
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-auto min-vh-100 bg-dark">
          <h1 className="Filter">Filter search by:</h1>
          <ul className="nav flex-column">
            <li>
              <div className="d-flex align-items-center">
                <a className="sidebari px-2" onClick={() => controlOnClick(1)}>
                  <i className="bi bi-trophy trophy" /><span className="ms-1 d-none d-sm-inline">Rank</span>
                </a>
                <ul className={`nav flex-column ms-auto ${showMenu === 1 ? 'show' : 'collapse'}`}>
                  <li>
                    <Link to="/beginner">
                      <a className="sidebari px-2" onClick={() => controlOnSubClick(1)}>
                        <i className="bi bi-award bronzemedal" /> Beginner(2)
                      </a>
                    </Link>
                    <ul className={`nav flex-column ms-auto ${showSubMenu === 1 ? 'show' : 'collapse'}`}>
                    </ul>
                  </li>
                  <li>
                    <Link to="/amateur">
                      <a className="sidebari px-2" onClick={() => controlOnSubClick(3)}>
                        <i className="bi bi-award silvermedal" /> Amateur(4)
                      </a>
                    </Link>
                    <ul className={`nav flex-column ms-auto ${showSubMenu === 3 ? 'show' : 'collapse'}`}>
                    </ul>
                  </li>
                  <li>
                    <Link to="/pro">
                      <a className="sidebari px-2" onClick={() => controlOnSubClick(5)}>
                        <i className="bi bi-award goldmedal" /> Pro(3)
                      </a>
                    </Link>
                    <ul className={`nav flex-column ms-auto ${showSubMenu === 5 ? 'show' : 'collapse'}`}>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <a className="sidebari px-2" onClick={() => controlOnClick(2)}>
                  <i className="bi bi-calendar calendar" /><span className="ms-1 d-none d-sm-inline">Season</span>
                </a>
                <ul className={`nav flex-column ms-auto ${showMenu === 2 ? 'show' : 'collapse'}`}>
                  <li>
                    <Link to="/spring">
                      <a className="sidebari px-2">
                        <i className="bi bi-tree tree" /> Spring(4)
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/summer">
                      <a className="sidebari px-2">
                        <i className="bi bi-sun sun" /> Summer(1)
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/fall">
                      <a className="sidebari px-2">
                        <i className="bi bi-tree-fill tree" /> Fall(2)
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/winter">
                      <a className="sidebari px-2">
                        <i className="bi bi-snow snow" /> Winter(1)
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <a className="sidebari px-2" onClick={() => controlOnClick(3)}>
                  <i className="bi bi-cash cost" /><span className="ms-1 d-none d-sm-inline">Cost</span>
                </a>
                <ul className={`nav flex-column ms-auto ${showMenu === 3 ? 'show' : 'collapse'}`}>
                  <li>
                    <Link to="/cost1">
                      <a className="sidebari px-2">
                        <i className="bi bi-currency-dollar dollar" /> 100 - 300(4)
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cost2">
                      <a className="sidebari px-2">
                        <i className="bi bi-currency-dollar dollar" /><i className="bi bi-currency-dollar dollar" /> 300 - 700(2)
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cost3">
                      <a className="sidebari px-2">
                        <i className="bi bi-currency-dollar dollar" /><i className="bi bi-currency-dollar dollar" /><i className="bi bi-currency-dollar dollar" /> 700 - 1000(5)
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
