import React, { Component } from 'react';

class TwitterApp extends Component {
  state = {
    tweet: 'title',
  };

  componentDidMount() {
    const { posts } = this.props;
    console.log('component Did Mount', posts);
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props;
    if (loading !== prevProps.loading) {
      console.log('componentDidUpdate loading state', loading);
    }
  }

  componentWillUnmount() {
    console.log(' componentWillUnmount: fui removido :(');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.tweet !== nextState.tweet;
  }
  tweet = () => this.setState({ tweet: true });
  render() {
    const { posts } = this.props;
    console.log('Render', posts);
    return (
      <div>
        <button onClick={this.tweet}>Re render</button>
        <h1>Teste</h1>
      </div>
    );
  }
}

export default TwitterApp;
