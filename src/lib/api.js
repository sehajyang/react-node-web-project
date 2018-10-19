import axios from 'axios';
import queryString from 'query-string';

//글작성 api함수 생성
export const writePost = ({title, s_location, body, tags}) => axios.post('/api/posts', {title, s_location, body, tags});

export const editPost = ({id, title, s_location, body, tags}) => axios.patch(`/api/posts/${id}`, { title, s_location, body, tags });

export const getPost = (id) => axios.get(`/api/posts/${id}`);
export const getPostList = ({tag, page}) => axios.get(`/api/posts/?${queryString.stringify({tag, page})}`);