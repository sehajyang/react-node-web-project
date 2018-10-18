import React from 'react';

import styles from './RightList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PostItem = () => {
  return(
    <div className={cx('right-item')}>
    RightList
  </div>
  )
}

const RightList = () => (
  <div className={cx('post-list')}>
    <PostItem/>
  </div>
);

export default RightList;