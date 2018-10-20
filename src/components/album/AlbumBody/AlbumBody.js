import React from 'react';

import styles from './AlbumBody.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);


const AlbumBody = ({body}) => (
  <div className={cx('album-body')}>
    <div className={cx('paper')}>
      <MarkdownRender markdown={body} />
    </div>
  </div>
);

export default AlbumBody;