import React from 'react';

import styles from './PostInfo.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import moment from 'moment'; //날짜 변환 라이브러리

const cx = classNames.bind(styles);


const PostInfo = ({publishedDate, title, s_location, tags}) => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <h1>{title}</h1>
      <div className={cx('tags')}>
        {
          //tags 존재할때만 map 실행
          tags && tags.map(
            tag => <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>
          )
        }
      </div>
      <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
      <div className={cx('s_location')}>{s_location}</div>
   </div>
  </div>
);

export default PostInfo;