import React from 'react';
import {
  View,
  asset,
  Environment,
  NativeModules,
} from 'react-360';
import VideoModule from 'VideoModule';

export default class Promo extends React.Component {
  promoVideo = VideoModule.createPlayer('promo');

  componentDidMount() {
    Environment.setBackgroundImage(asset('happy_girls.jpg'), { rotateTransform: [{rotateY: '100deg'}] });

    this.promoVideo.play({
      source: {url: asset('./video/spi.mp4').uri},
      muted: false,
      volume: 0.1
    });

    Environment.setScreen(
      'default', /* screen name */
      'promo', /* player unique id */
      'main', /* surface name */
      0, 0, 800, 450 /* relative position on the surface */
    );
  }

  componentWillUnmount() {
    this.promoVideo.destroy();
  }

  render() {
    return (
      <View style={{width: 800,height: 450}} />
    );
  }
}
