import React from 'react';
import {
  Animated,
  Text,
  View,
  VrButton
} from 'react-360';
import { connect, nextCrypto } from './store';
import styles from './stylesheet';

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
    fade: new Animated.Value(0)
  }

  fetchCryptoData(crypto) {
    fetch(`https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=${crypto}&tsym=USD&api_key=1bd0917187334c260db80edb86b250d88a7fe2c3721153a3467742137b6499ba`)
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

  clickHandler(index) {
    nextCrypto(index)
  }

  render() {
    let { fade } = this.state;

    return(
      <Animated.View style={[styles.wrapper, {opacity: fade}]}>
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
        <View>
          <VrButton style={styles.button} onClick={() => this.clickHandler(this.props.index)}>
          </VrButton>
        </View>
      </Animated.View>
    );
  }
}

const ConnectedRightPanel = connect(RightPanel);

export default ConnectedRightPanel;
