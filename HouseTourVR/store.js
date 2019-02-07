import React from 'react';
import house from './data/houseData';

const State = {
  room: house.House.roomName,
  info: house.House.info,
  adjacentRooms: house.House.adjacentRooms,
}

export default function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      room: State.room,
      info: State.info,
      adjacentRooms: State.adjacentRooms
    };

    render() {
      return (
        <Component
          {...this.props}
          room={this.state.room}
          info={this.state.info}
          adjacentRooms={this.state.adjacentRooms}
        />
      )
    }
  }
}
