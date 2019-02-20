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
    fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD`)
    .then(response => response.json())
    .then(data => {
      this.setState({ cryptocurrency: {
          symbol: `${crypto}`,
          time: data["Data"][30]["time"],
          close: data["Data"][30]["close"],
          high: data["Data"][30]["high"],
          low: data["Data"][30]["low"],
          open: data["Data"][30]["open"],
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
    twitter: {
      following: '',
      followers: '',
      link: ''
    },
    reddit: {
      link: '',
      subscribers: ''
    },
    facebook: {
      link: '',
      likes: ''
    }
  };

  componentDidMount() {
    fetch(`https://min-api.cryptocompare.com/data/social/coin/latest?coinId=1182&api_key=1bd0917187334c260db80edb86b250d88a7fe2c3721153a3467742137b6499ba`)
      .then(response => response.json())
      .then(data => this.setState({
        twitter: {
          following: data["Data"]["Twitter"]["following"],
          followers: data["Data"]["Twitter"]["followers"]
        },
        reddit: {
          subscribers: data["Data"]["Reddit"]["subscribers"]
        },
        facebook: {
          likes: data["Data"]["Facebook"]["likes"],
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
        <View style={{marginTop: 125}}>
          <Text style={styles.socialMediaHeader}>Twitter</Text>
          <Text style={styles.textSize}>Followers: {this.state.twitter.followers}</Text>
          <Text style={styles.textSize}>Following: {this.state.twitter.following}</Text>

          <Text style={styles.socialMediaHeader}>Reddit</Text>
          <Text style={styles.textSize}>Subscribers: {this.state.reddit.subscribers}</Text>

          <Text style={styles.socialMediaHeader}>Facebook</Text>
          <Text style={styles.textSize}>Likes: {this.state.facebook.likes}</Text>
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
  socialMediaHeader: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

AppRegistry.registerComponent('LeftPanel', () => LeftPanel);
AppRegistry.registerComponent('RightPanel', () => RightPanel);
AppRegistry.registerComponent('CryptoModel', () => CryptoModel);
