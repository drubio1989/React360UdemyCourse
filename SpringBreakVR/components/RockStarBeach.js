import React from 'react';
import {
  asset,
  Environment,
  View,
} from 'react-360';

import VideoModule from 'VideoModule';

export default class RockStarBeach extends React.Component {
  rockStarBeachVideo = VideoModule.createPlayer('nightlife');

  componentDidMount() {

    this.rockStarBeachVideo.play({
      source: { url: asset('./video/rockstar_beach.mp4').uri},
      muted: false
    });

    Environment.setBackgroundVideo('nightlife', { rotateTransform: [{rotateY: '180deg'}] });
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
