import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_ALBUM = 'album/GET_ALBUM';

// action creators
export const getAlbum = createAction(GET_ALBUM, api.getAlbum);

// initial state
const initialState = Map({
  album: Map({})
});

// reducer
export default handleActions({
  ...pender({
    type: GET_ALBUM,
    onSuccess: (state, action) => {
      const { data: album } = action.payload;
      return state.set('album', fromJS(album));
    }
  })
}, initialState)
