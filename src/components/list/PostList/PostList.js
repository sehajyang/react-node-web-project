import React from 'react';

import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';

const cx = classNames.bind(styles);

const PostItem =({title,s_location,publishedDate, tags, id}) =>{
  const tagList = tags.map(
    tag => <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>
  );

  return(
    <div className={cx('post-item')}>
      <div className={cx('table')}>
        <table>
          <tbody>
            <tr>
              <td width="10%">1</td>
              <td width="35%"><Link to={`/post/${id}`}>{title}</Link></td>
              <td width="20%">{s_location}</td>
              <td width="20%">{moment(publishedDate).format('ll')}</td>
              <td width="15%">{tagList}</td>
            </tr>
          </tbody>
            
        </table>
      </div>
  </div>
  )
}

const PostList = ({posts}) => {
  const postList = posts.map(
    (post) =>{
      const { _id, title, s_location, publishedDate, tags } = post.toJS();
      return(
        <PostItem
          title={title}
          s_location={s_location}
          publishedDate={publishedDate}
          tags={tags}
          key={_id}
          id={_id}
        />
      )
    }
);
    return (
      <div>
       <table className={cx('table-thead')}>
          <tr>
            <th width="10%">Num</th>
            <th width="35%">title</th>
            <th width="20%">Location</th>
            <th width="20%">Date</th>
            <th width="15%">Member</th>
          </tr>
        </table>
        <div className={cx('post-list')}>
          {postList}
        </div>
      </div>
    );
 };

export default PostList;