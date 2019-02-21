import React from 'react';
import {
  Animated,
  Text,
  View
} from 'react-360';
import { connect } from './store';
import styles from './stylesheet';

class LeftPanel extends React.Component {
  state ={
    cryptocurrency: {
      open: '',
      close: '',
      high: '',
      low: '',
      volumefrom: '',
      volumeto: ''
    },
    fade: new Animated.Value(0)
  }

  fetchCryptoData(crypto) {
    fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${crypto}&tsym=USD`)
    .then(response => response.json())
    .then(data => {
      this.setState({ cryptocurrency: {
          open: data["Data"][30]["open"],
          close: data["Data"][30]["close"],
          high: data["Data"][30]["high"],
          low: data["Data"][30]["low"],
          volumefrom: data["Data"][30]["volumefrom"],
          volumeto: data["Data"][30]["volumeto"],
        }
      });
    })
  }

  componentDidMount() {
    this.fetchCryptoData(this.props.crypto)

    Animated.timing(
      this.state.fade,
      {
        toValue: 1,
        duration: 3000,
      }
    ).start();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.crypto !== this.props.crypto) {
      this.fetchCryptoData(this.props.crypto)
    }
  }

  render() {
    let { fade } = this.state;

    return(
      <Animated.View style={[styles.wrapper, {opacity: fade}]}>
        <View style={styles.header}>
          <Text style={styles.textSize}>Crypto</Text>
        </View>
        <View>
          <Text>Price Statistics</Text>
          <Text>High: {this.state.cryptocurrency.high}</Text>
          <Text>Low: {this.state.cryptocurrency.low}</Text>
          <Text>Open: {this.state.cryptocurrency.open}</Text>
          <Text>Close: {this.state.cryptocurrency.close}</Text>
          <Text>Volume From: {this.state.cryptocurrency.volumefrom}</Text>
          <Text>Volume To: {this.state.cryptocurrency.volumeto}</Text>
        </View>
      </Animated.View>
    );
  }
}

const ConnectedLeftPanel = connect(LeftPanel);

export default ConnectedLeftPanel;
