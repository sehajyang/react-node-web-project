import axios from 'axios';

//글작성 api함수 생성
export const writePost = ({title, s_location, body, tags}) => axios.post('/api/posts', {title, s_location, body, tags});
export const getPost = (id) => axios.get(`/api/posts/${id}`);