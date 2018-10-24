import React from 'react';

import styles from './AlbumList.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import removeMd from 'remove-markdown';

const cx = classNames.bind(styles);

const AlbumItem = ({title, body, album_title, num, _id}) => {
  return (
    <div className={cx('album-item')}>
      <h1><Link key={_id} to={`/album/${album_title}`}>{num}. {title}</Link></h1>
      <h5>{album_title}</h5>
      <div className={cx('album_title')}></div>
      <p>{removeMd(body)}</p>
      
    </div>
  )
}
const AlbumList = ({albums}) => {
  const albumList = albums.map( 
    (album) => {
      const {title, body, album_title, num, _id } = album.toJS();
      return (
        <AlbumItem
          title={title}
          body={body}
          album_title={album_title}
          num={num}
          key={_id}
          id={album_title}
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