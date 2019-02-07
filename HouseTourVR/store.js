import React from 'react';
import { asset, Environment } from 'react-360';
import house from './data/houseData';

const State = {
  room: house.House.roomName,
  info: house.House.info,
  adjacentRooms: house.House.adjacentRooms
}

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function changeRoom(roomSelection) {
  let roomName = roomSelection;

  State.room = roomName;
  State.info = house[`${roomName}`].info;
  State.adjacentRooms = house[`${roomName}`].adjacentRooms;

  Environment.setBackgroundImage(asset(`./360_${house[`${roomName}`].img}`));

  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      room: State.room,
      info: State.info,
      adjacentRooms: State.adjacentRooms
    };

    _listener = () => {
      this.setState({
        room: State.room,
        info: State.info,
        adjacentRooms: State.adjacentRooms
      });
    }

    componentDidMount() {
      listeners.add(this._listener);
    }

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
