import React from 'react';

import styles from './LeftList.scss';
import classNames from 'classnames/bind';
import profileImage from 'resources/img/bts2.png'

const cx = classNames.bind(styles);

const PostItem = () => {
  return(
    <div className={cx('left-item')}>
      <img src={profileImage} alt="profile_img" width="250px" height="280px"/>
      <div className={cx('left-text')}>
         We are BTS! <br />
         Debut 2013.06.13 <br />
         JIN SUGA RM JHOPE JIMIN V JK <br />
         Big Hit Entertainment

      </div>
  </div>
  )
}

const LeftList = () => (
  <div className={cx('post-list')}>
    <PostItem/>
  </div>
);

export default LeftList;