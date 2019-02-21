import React from 'react';
import {
  Animated,
  Text,
  View,
} from 'react-360';
import { connect } from './store';
import styles from './stylesheet';


class LeftPanel extends React.Component {
  state = {
    cryptocurrency: {
      symbol: '',
      time: '',
      close: '',
      high: '',
      low: '',
      open: '',
      volumefrom: '',
      volumeto: ''
    },
    fade: new Animated.Value(0)
  };

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
          volumeto: data["Data"][30]["volumeto"]
        }
      });
    })
  }

  componentDidMount() {
    this.fetchCryptoData(this.props.crypto);

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
      this.fetchCryptoData(this.props.crypto);
    }
  }

  render() {
    let { fade } = this.state;

    return (
      <Animated.View style={[{opacity: fade}, styles.leftPanel]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Crypto</Text>
        </View>
        <View style={{marginTop: 100}}>
          <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>Price Statistics</Text>
          <Text style={styles.textSize}>
            High: ${this.state.cryptocurrency.high}
          </Text>
          <Text style={styles.textSize}>
            High: ${this.state.cryptocurrency.high}
          </Text>
          <Text style={styles.textSize}>
            Low: ${this.state.cryptocurrency.low}
          </Text>
          <Text style={styles.textSize}>
            Open: ${this.state.cryptocurrency.open}
          </Text>
          <Text style={styles.textSize}>
            Close: ${this.state.cryptocurrency.close}
          </Text>
          <Text style={styles.textSize}>
            Volume From: {this.state.cryptocurrency.volumefrom}
          </Text>
          <Text style={styles.textSize}>
            Volume To: {this.state.cryptocurrency.volumeto}
          </Text>
        </View>
      </Animated.View>
    );
  }
}

const ConnectedLeftPanel = connect(LeftPanel);

export default ConnectedLeftPanel;
