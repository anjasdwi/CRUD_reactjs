import React, { Component } from 'react'
import '../../App.css';

export class Filter extends Component {
    
    render() {
      return (
        <div>
            <input type="text" onChange={this.props.onChange.bind(this)} />
        </div>
      );
    }
    
  }
export default Filter;