import React from 'react';
import NumberLabel from './NumberLabel.jsx';

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.generateRandom = this.generateRandom.bind(this);
  }

  generateRandom() {
    this.setState({ number: Math.random() });
  }

  render() {
    return (
      <div>
        <NumberLabel number={this.state.number} />
        <button onClick={this.generateRandom}>Generate new value</button>
      </div>
    );
  }
}
