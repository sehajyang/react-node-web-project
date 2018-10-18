import React from 'react';

import styles from './PostInfo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const PostInfo = () => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <h1>Title</h1>
      <div className={cx('tags')}>
        <a>#V</a> <a>#RM</a>
      </div>
      <div className={cx('date')}>2018-10-18</div>
   </div>
  </div>
);

export default PostInfo;