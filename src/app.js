import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
};

const defaultProps = {
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world!!</h1>
        <h2>Let's build program</h2>
      </div>
    );
  }

}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
