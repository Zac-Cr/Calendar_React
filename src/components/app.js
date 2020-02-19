import React, { Component } from 'react';

import Header from "./header"
import Content from "./content/content"
export default class App extends Component {
  constructor(){
    super()

    this.state={
      month: "February",
      daysInMonth: 29,
      year: 2020
    }
  }

  render() {
    return (
      <div className='app'>
       <Header month = {this.state.month} />
       <Content daysInMonth= {this.state.daysInMonth}/>
       <div className="footer">
          <h3>{this.state.year}</h3>
       </div> 
      </div>
    );
  } 
}
