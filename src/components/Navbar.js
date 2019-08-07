import React ,{ Component } from "react";

 class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">AppDividend</a>
                <buton className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon"></span>
                </buton>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <a className="nav-link" >Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;