import React from 'react';
import  { ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { fetchList } from '../actions/index';

import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {

  componentWillMount() {
    this.props.fetchList()
  }

  renderAlbums() {
    return this.props.albums.map((album, i) => {
      return (
        <AlbumDetail 
          key={i}
          album={album}
        />
      )
    })
  }

  render() {
    console.log(this.props.albums)
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
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