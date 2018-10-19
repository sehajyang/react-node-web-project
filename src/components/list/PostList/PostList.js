import React from 'react';

import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostItem = () => {
  return(
    <div className={cx('post-item')}>
    <div className={cx('table')}>
      <table>
        <thead>
          <tr>
            <th width="10%">Num</th>
            <th width="45%">title</th>
            <th width="20%">Date</th>
            <th width="25%">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><Link to="/post/1">베를린투어</Link></td>
            <td>2018-10-18</td>
            <td>독일 베를린 벤츠아레나</td>
          </tr>
          <tr>
            <td>1</td>
            <td>런던투어</td>
            <td>2018-10-18</td>
            <td>런던</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

const PostList = () => (
  <div className={cx('post-list')}>
    <PostItem/>
  </div>
);


export default PostList;