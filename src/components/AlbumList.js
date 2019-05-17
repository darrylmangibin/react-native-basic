import React from 'react';
import  { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { fetchList } from '../actions/index';
import axios from 'axios';

class AlbumList extends React.Component {

  componentWillMount() {
    this.props.fetchList()
  }

  renderAlbums() {
    return this.props.albums.map((album, i) => {
      return (
        <Text key={i}>{album.title}</Text>
      )
    })
  }

  render() {
    console.log(this.props.albums)
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
};

const mapsStateToProps = (state) => {
  return {
    albums: state.albumList
  }
}

export default connect(mapsStateToProps, {
  fetchList
})(AlbumList);