import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header('Prism Madlibs', "Please fill out the boxes below, then click 'generate' to create your story.") }
        <Card />
      </div>
    );
  }
}

export default Home;