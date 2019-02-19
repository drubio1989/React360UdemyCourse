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
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Crypto</Text>
        </View>
      </View>
    );
  }
}

class RightPanel extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Information</Text>
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
    padding: 10,
  },
  header: {
    backgroundColor: '#003459',
  },
  textSize: {
    fontSize: 40
  }
});

AppRegistry.registerComponent('LeftPanel', () => LeftPanel);
AppRegistry.registerComponent('RightPanel', () => RightPanel);
AppRegistry.registerComponent('CryptoModel', () => CryptoModel);
