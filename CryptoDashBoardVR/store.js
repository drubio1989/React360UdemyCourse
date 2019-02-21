import React from 'react';

const State = {
  crypto: 'BTC',
  index: 0
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function nextCrypto(index) {
  let cryptoIndex = index;
  let cryptos = [{ crypto: 'BTC',
                   index: 0
                 },
                 {
                   crypto: 'DASH',
                   index: 1
                 },
                 { crypto: 'XMR',
                   index: 2
                 },
                 { crypto: 'ZEN',
                   index: 3
                 }];


  if (index < 3) {
    cryptoIndex = cryptoIndex + 1;
  } else {
    cryptoIndex = 0;
  }

  State.crypto = cryptos[cryptoIndex].crypto;
  State.index = cryptos[cryptoIndex].index;
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      crypto: State.crypto,
      index: State.index
    };

    _listener = () => {
      this.setState({
        crypto: State.crypto,
        cryptoSymbol: State.cryptoSymbol,
        index: State.index
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          crypto={this.state.crypto}
          index={this.state.index}
        />
      );
    }
  };
}
