import React, { Component } from 'react';

class Photographer extends Component {
  render() {
    return (
        <div className="col-3">
              <img alt={this.props.photographer.name} name={this.props.photographer.name} onClick={this.props.onClick} className="img-fluid p-3" src={"/images/"+this.props.photographer.image} />
        </div>
        
    );
  }
}

export default Photographer;
