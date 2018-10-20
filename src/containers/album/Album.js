import React, { Component } from 'react';
import AlbumInfo from 'components/album/AlbumInfo';
import AlbumBody from 'components/album/AlbumBody';
import * as albumActions from 'store/modules/album';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Album extends Component {
  initialize = async () => {
    const { albumActions, album_title } = this.props;
    try {
      await albumActions.getAlbum(album_title);
    } catch (e) {
      console.log(e);
    }
  }
  componentDidMount() {
    this.initialize();
  }
  
  render() {
    const { loading, album } = this.props;
    
    if(loading) return null; 

    const { title, album_title, num, body } = album.toJS();

    return (
      <div>
        <AlbumInfo title={title} album_title={album_title} num={num}/>
        <AlbumBody body={body}/>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    album: state.album.get('album'),
    loading: state.pender.pending['album/GET_ALBUM'] 
  }),
  (dispatch) => ({
    albumActions: bindActionCreators(albumActions, dispatch)
  })
)(Album);
