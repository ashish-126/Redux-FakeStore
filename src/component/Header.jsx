import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid nav_bg">
            <div className="row">
                <div className = "col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink exact className="navbar-brand" to="/">Ash FakeShop</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                
                                
                            </ul>
                                      
                            <div class="ui compact menu">
                                <div class="ui simple dropdown item">
                                    Category
                                    <i class="dropdown icon"></i>
                                    <div class="menu">
                                        <div class="item" ><NavLink class="dropdown-item" to="/category/men's clothing">men's clothing</NavLink></div>
                                        <div class="item"><NavLink class="dropdown-item" to="/category/jewelery">jewelery</NavLink></div>
                                        <div class="item"><NavLink class="dropdown-item" to="/category/electronics">electronics</NavLink></div>
                                        <div class="item"><NavLink class="dropdown-item" to="/category/women's clothing">women's clothing</NavLink></div>
                                    </div>
                                </div>
                                </div>           
                            
                           
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>

  );
};

export default Header;