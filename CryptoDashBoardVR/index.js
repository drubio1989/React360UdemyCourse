import React from 'react';
import {
  asset,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
import connect from './store';
import Entity from 'Entity';

export default class CryptoModel extends React.Component {
  render() {
    return (
      <View>
        <Entity
          style={{transform: [{scaleX: 1}, {scaleY: 1}, {scaleZ: 1}, {rotateX: 90}]}}
          source={{obj: asset('models/bitcoin.obj')}}
        />
      </View>
    );
  }
};

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
    }
  };

  componentDidMount() {
    fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.crypto}&tsym=USD`)
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

  render() {
    return (
      <View style={styles.leftPanel}>
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
    },
    hover: false
  };

  componentDidMount() {
    fetch(`https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=${this.props.crypto}&tsym=USD&api_key=1bd0917187334c260db80edb86b250d88a7fe2c3721153a3467742137b6499ba`)
      .then(response => response.json())
      .then(data => this.setState({
        cryptoData: {
          symbol: data["Data"][0]["CoinInfo"]["Name"],
          algorithm: data["Data"][0]["CoinInfo"]["Algorithm"],
          proofType: data["Data"][0]["CoinInfo"]["ProofType"],
          blockNumber: data["Data"][0]["CoinInfo"]["BlockNumber"],
          blockTime: data["Data"][0]["CoinInfo"]["BlockTime"],
          blockReward: data["Data"][0]["CoinInfo"]["BlockReward"]
        }
      })
    )
  }

  render() {
    return (
      <View style={styles.rightPanel}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Information</Text>
        </View>
        <View>
          <Text style={styles.textSize}>
            Symbol: { this.state.cryptoData.symbol }
          </Text>
          <Text style={styles.textSize}>
            Algorithm: { this.state.cryptoData.algorithm }
          </Text>
          <Text style={styles.textSize}>
            Proof Type: { this.state.cryptoData.proofType }
          </Text>
          <Text style={styles.textSize}>
            Block Number: { this.state.cryptoData.blockNumber }
          </Text>
          <Text style={styles.textSize}>
            Block Time: { this.state.cryptoData.blockTime }
          </Text>
          <Text style={styles.textSize}>
            Block Reward: { this.state.cryptoData.blockReward }
          </Text>
        </View>
        <View>
          <VrButton style={this.state.hover ? styles.hover : styles.button}
                    onEnter={() => this.setState({hover: true})}
                    onExit={() => this.setState({hover: false})}>
            <Text style={styles.textSize}>Next</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leftPanel: {
    width: 300,
    height: 600,
    backgroundColor: '#00171F',
    borderColor: '#003459',
    borderWidth: 10,
    flexDirection: 'column',
    padding: 10,
  },
  rightPanel: {
    width: 300,
    height: 600,
    backgroundColor: '#00171F',
    borderColor: '#003459',
    borderWidth: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
  header: {
    backgroundColor: '#003459',
  },
  headerText: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textSize: {
    fontSize: 20,
    textAlign: 'center'
  },
  infoHeader: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#0EB1D2',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 2.5
  },
  hover: {
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#0073B7',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 2.5,
  },
});

const ConnectedLeftPanel = connect(LeftPanel);
const ConnectedRightPanel = connect(RightPanel);
const ConnectedCryptoModel = connect(CryptoModel);


AppRegistry.registerComponent('ConnectedLeftPanel', () => ConnectedLeftPanel);
AppRegistry.registerComponent('ConnectedRightPanel', () => ConnectedRightPanel);
AppRegistry.registerComponent('ConnectedCryptoModel', () => ConnectedCryptoModel);
