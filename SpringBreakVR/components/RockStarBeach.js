import React from 'react';
import {
  asset,
  Environment,
  View,
} from 'react-360';

import VideoModule from 'VideoModule';

export default class RockStarBeach extends React.Component {
  rockStarBeachVideo = VideoModule.createPlayer('rockstar');

  componentDidMount() {

    this.rockStarBeachVideo.play({
      source: { url: asset('./video/rockstar_beach.mp4').uri},
      muted: false
    });

    Environment.setBackgroundVideo('rockstar', { rotateTransform: [{rotateY: '180deg'}] });
  }

  componentWillUnmount() {
    this.rockStarBeachVideo.destroy();
  }

  render() {
    return(
      <View />
    )
  }
}
