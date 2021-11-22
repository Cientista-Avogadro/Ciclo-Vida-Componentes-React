import React, { Component } from 'react';
import './App.css';
import TwitterApp from './Twitter';

class App extends Component {
  state = {
    loading: false,
    actived: true,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ loading: true });
    }, 3000);
  }

  onRemove = () => {
    this.setState({ actived: false });
  };

  render() {
    const posts = [
      {
        title: 'apto',
        description: 'foo',
      },
      {
        title: 'apto',
        description: 'foo',
      },
    ];

    return (
      <>
        <button onClick={this.onRemove}>Remover</button>
        {this.state.actived && (
          <TwitterApp posts={posts} loading={this.state.loading} />
        )}
      </>
    );
  }
}

export default App;
