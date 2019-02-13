import React, { Component } from 'react';

import './assets/sass/Main.scss';
import PagePresenter from './javascript/page/page-presenter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <PagePresenter/>
        </div>
      </div>
    );
  }
}

export default App;
