import React from 'react';
import { asset, Environment } from 'react-360';
import house from './data/houseData';

const State = {
  room: '',
  info: '',
  adjacentRooms: []
}

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function changeRoom(roomSelection) {
  State.room = roomSelection;
  State.info = house[`${roomSelection}`].info;
  State.adjacentRooms = house[`${roomSelection}`].adjacentRooms;

  Environment.setBackgroundImage(asset(`./360_${house[`${roomSelection}`].img}`));

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

    componentWillMount() {
      if (this.state.room === '') {
        this.setState({
          room: house.House.roomName,
          info: house.House.info,
          adjacentRooms: house.House.adjacentRooms
        })
      }
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
