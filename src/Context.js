import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sorted: [],
    featured: [],
    loading: true
  };

  // getData = () => {}

  componentDidMount() {
    const rooms = this.formatData(items);
    // console.log(rooms);
    const featured = rooms.filter(room => room.featured === true);

    this.setState({
      rooms,
      featured,
      sorted: rooms,
      loading: false
    });
  }

  formatData = items => {
    let tempItems = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };

      return room;
    });
    return tempItems;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
