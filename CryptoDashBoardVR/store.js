import React from 'react';

const State = {
  crypto: 'BTC',
};

export default function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      crypto: State.crypto
    };

    render() {
      return (
        <Component
          {...this.props}
          crypto={this.state.crypto}
        />
      );
    }
  };
}
