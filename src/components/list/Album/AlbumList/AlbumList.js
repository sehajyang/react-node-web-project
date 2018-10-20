import React from 'react';

import styles from './AlbumList.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import removeMd from 'remove-markdown';

const cx = classNames.bind(styles);

const AlbumItem = ({title, body, album_title, num}) => {
  return (
    <div className={cx('album-item')}>
      <h1><Link to={`/album/${album_title}`}>{num} {album_title}</Link></h1>
      <div className={cx('album_title')}></div>
      <p>{removeMd(body)}</p>
      <div className={cx('num')}>{num}</div>
    </div>
  )
}

const AlbumList = ({albums}) => {
  const albumList = ( 
    (album) => {
      const {title, body, album_title, num } = album.toJS();
      return (
        <AlbumItem
          title={title}
          body={body}
          album_title={album_title}
          num={num}
        />
      )
    }
);
 
  return (
    <div className={cx('album-list')}>
      {albumList}
    </div>
  );
};

export default AlbumList;