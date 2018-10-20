import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_POST_LIST = 'list/GET_POST_LIST';
const GET_ALBUM_LIST = 'list/GET_ALBUM_LIST';

// action creators
export const getPostList = createAction(GET_POST_LIST, api.getPostList, meta => meta);
export const getAlbumList = createAction(GET_ALBUM_LIST, api.getAlbumList, meta => meta);

// initial state
const initialState = Map({
  posts: List(),
  lastPage: null,
  albums: List()
});

// reducer
export default handleActions({
  ...pender({
    type: GET_POST_LIST,
    onSuccess: (state, action) => {
      const { data: posts } = action.payload;

      const lastPage = action.payload.headers['last-page'];
      return state.set('posts', fromJS(posts))
                  .set('lastPage', parseInt(lastPage, 10));
    }
  }),
  ...pender({
    type: GET_ALBUM_LIST,
    onSuccess: (state, action) => {
      const { data: albums } = action.payload;

      return state.set('albums', fromJS(albums));
    }
  })
}, initialState)
