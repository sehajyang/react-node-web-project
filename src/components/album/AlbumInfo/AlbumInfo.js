import React from 'react';

import styles from './AlbumInfo.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


const AlbumInfo = ({ title, album_title, num }) => (
  <div className={cx('album-info')}>
    <div className={cx('info')}>
      <h1>{num}. {title}</h1>
      <div className={cx('num')}>
      </div>
      <div className={cx('album_title')}>{album_title}</div>
   </div>
  </div>
);

export default AlbumInfo;