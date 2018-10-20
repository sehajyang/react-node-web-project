import axios from 'axios';
import queryString from 'query-string';

//글작성 api함수 생성
export const writePost = ({title, s_location, body, tags}) => axios.post('/api/posts', { title, s_location, body, tags });
export const getPost = (id) => axios.get(`/api/posts/${id}`);
export const getPostList = ({ tag, page }) => axios.get(`/api/posts/?${queryString.stringify({ tag, page })}`);

export const editPost = ({id, s_location, title, body, tags}) => axios.patch(`/api/posts/${id}`, { title, s_location, body, tags});
export const removePost = (id) => axios.delete(`/api/posts/${id}`);

//album 관련 조회
export const getAlbum = (album_title) => axios.get(`/api/albums/?${queryString.stringify({album_title})}`);
export const getAlbumList = ({ album_title, num }) => axios.get(`/api/albums/${album_title}/${num}`);