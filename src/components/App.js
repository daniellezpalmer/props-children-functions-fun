import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from '../components/Baselayout.js';
import ParentComponent from '../components/Parentcomponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <ParentComponent />
      </BaseLayout>
      </div>
    );
  }
}

export default App;
