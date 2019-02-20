import React from 'react';
import {
  asset,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Entity from 'Entity';

export default class CryptoModel extends React.Component {
  render() {
    return (
      <View>
        <Entity
          style={{transform: [{scaleX: 1}, {scaleY: 1}, {scaleZ: 1}, {rotateX: 90}]}}
          source={{obj: asset('models/BTC.obj')}}
        />
      </View>
    );
  }
};

class LeftPanel extends React.Component {
  state ={
    cryptocurrency: {
      open: '',
      close: '',
      high: '',
      low: '',
      volumefrom: '',
      volumeto: ''
    }
  }

  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD')
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

  render() {
    return(
      <View style={styles.wrapper}>
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
      </View>
    );
  }
}

class RightPanel extends React.Component {
  state = {
    cryptoData: {
      symbol: '',
      algorithm: '',
      proofType: '',
      blockNumber: '',
      blockTime: '',
      blockReward: ''
    }
  }

  componentDidMount() {
    fetch(`https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=BTC&tsym=USD&api_key=1bd0917187334c260db80edb86b250d88a7fe2c3721153a3467742137b6499ba`)
    .then(response => response.json())
    .then(data => this.setState({
      cryptoData: {
        symbol: data["Data"][0]["CoinInfo"]["Name"],
        algorithm: data["Data"][0]["CoinInfo"]["Algorithm"],
        proofType: data["Data"][0]["CoinInfo"]["ProofType"],
        blockNumber: data["Data"][0]["CoinInfo"]["BlockNumber"],
        blockTime: data["Data"][0]["CoinInfo"]["BlockTime"],
        blockReward: data["Data"][0]["CoinInfo"]["BlockReward"],
        }
      })
    )
  }

  render() {
    return(
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.textSize}>Information</Text>
        </View>
        <View>
          <Text>Symbol: {this.state.cryptoData.symbol}</Text>
          <Text>Algorithm: {this.state.cryptoData.algorithm}</Text>
          <Text>Proof Type: {this.state.cryptoData.proofType}</Text>
          <Text>Block Number: {this.state.cryptoData.blockNumber}</Text>
          <Text>Block Time: {this.state.cryptoData.blockTime}</Text>
          <Text>Block Reward: {this.state.cryptoData.blockReward}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    height: 600,
    backgroundColor: '#00171F',
    borderColor: '#003459',
    borderWidth: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10
  },
  header: {
    backgroundColor: '#003459'
  },
  textSize: {
    fontSize: 30,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('LeftPanel', () => LeftPanel);
AppRegistry.registerComponent('RightPanel', () => RightPanel);
AppRegistry.registerComponent('CryptoModel', () => CryptoModel);
