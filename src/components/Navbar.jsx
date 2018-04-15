import React, { Component } from 'react';

class Navbar extends Component {

    generateMessage = () => {
        if (this.props.score===0 && this.props.topScore===0) {
            return "Click an image to begin!";
        } else if (this.props.score===0) {
            return "Oh dear, you guessed incorrectly!";
        } else {
            return "You guessed correctly!";
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-white border-bottom mb-3">
                <div className="container">
                    <a className="navbar-brand font-weight-light" href="/">
                        <img alt="Snappr" src="/images/snapprlogo-dark.svg" height="20" className="mr-2" />
                        Photographer Game
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">xxx</a>
                            </li> */}
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item nav-link">{this.generateMessage()}</li>   
                            <li className="nav-item nav-link">Score: {this.props.score}</li>   
                            <li className="nav-item nav-link">Top Score: {this.props.topScore}</li>    
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
