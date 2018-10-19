import React from 'react';

import styles from './LeftList.scss';
import classNames from 'classnames/bind';
import profileImage from 'resources/img/bts2.png'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostItem = () => {
  return(
    <div className={cx('left-item')}>
      <img src={profileImage} alt="profile_img" width="250px" height="280px"/>
      <div className={cx('left-text')}>
         We are BTS! <br />
         Debut 2013.06.13 <br />
         JIN SUGA RM JHOPE JIMIN V JK <br />
         Big Hit Entertainment<br />
      </div>
      <div className={cx('left-link')}>
        <Link to="/">Album list</Link> <br />
         <a href="https://www.ibighit.com/main/index">BigHit Shop</a> <br />
         <a href="https://www.bt21.com/">BT21</a> <br />
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