import React, { Component } from 'react';
import AlbumList from 'components/list/Album/AlbumList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as listActions from 'store/modules/list';

//AlbumListPage에서 album_title 값을 전달받음,
//AlbumList를 불러오는 API를 호출하고 데이터를 넣어주고 album_title 값이 변하면 새로 불러옴

class AlbumListContainer extends Component {
  getAlbumList = () => {
    //album_title 값을 부모에게서 받아옴
    const { album_title, ListActions } = this.props;
    ListActions.getAlbumList({
      album_title
    });
  }

  componentDidMount() {
    this.getAlbumList();
  }

  componentDidUpdate(prevProps, prevState) {
    //album_title 바뀔때 리스트 다시 불러옴
    if(prevProps.album_title !== this.props.album_title) {
      console.log('albumlistcontainer');
      this.getAlbumList();
      //스크롤바 맨 위로
      document.documentElement.scrollTop = 0; 
    }
  }
  
  
  render() {
    const { loading, albums, album_title } = this.props;
    if(loading) return null;
    return (
      <div>
        <AlbumList albums={albums} album_title={album_title}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    albums: state.list.get('albums'),
    loading: state.pender.pending['list/GET_ALBUM_LIST']
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(AlbumListContainer);
