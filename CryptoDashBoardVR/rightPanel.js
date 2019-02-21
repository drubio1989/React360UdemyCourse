import React from 'react';
import {
  Animated,
  asset,
  NativeModules,
  Text,
  View,
  VrButton
} from 'react-360';
import { connect, nextCrypto } from './store';
import styles from './stylesheet';

const { AudioModule } = NativeModules;

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
    hover: false,
    fade: new Animated.Value(0)
  };

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
          blockReward: data["Data"][0]["CoinInfo"]["BlockReward"]
        }
      })
    )
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

  clickHandler(index) {
    nextCrypto(index)

    AudioModule.playOneShot({
      source: asset('audio/click.wav'),
    });
  }

  render() {
    let { fade } = this.state;

    return (
      <Animated.View style={[{opacity: fade},styles.rightPanel]}>
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
                    onExit={() => this.setState({hover: false})}
                    onClick={() => this.clickHandler(this.props.index)}>
            <Text style={styles.textSize}>Next</Text>
          </VrButton>
        </View>
      </Animated.View>
    );
  }
}

const ConnectedRightPanel = connect(RightPanel);

export default ConnectedRightPanel;
