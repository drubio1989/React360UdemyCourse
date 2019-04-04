import React from 'react';
import {
  AppRegistry,
  asset,
  Environment,
  NativeModules,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import InfoButton from './components/InfoButton';

const SCENES = ['Promo', 'Events', 'Rockstar Beach'];

class Scene extends React.Component {
  state = {
    scene: ''
  }

  clickHandler(selection) {}

  render() {
    const sceneButtons = [];

    for (let i in SCENES) {
      sceneButtons.push(
        <InfoButton
          key={i}
          style={styles.button}
          source={asset('palm-tree.png')}
          text={SCENES[i]}
          onClick={() => { this.clickHandler(SCENES[i])}}
        />)
    }

    return(
      <View style={styles.panel}>
        <View>
        </View>
        <View style={styles.section}>
          {sceneButtons}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 800,
    height: 450,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  section: {
    padding: 10,
    backgroundColor: '#FFE500',
    borderColor: '#ED8B00',
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
  }
});

AppRegistry.registerComponent('Scene', () => Scene);
