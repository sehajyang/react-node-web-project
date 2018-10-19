import React from 'react';

import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);


const PreviewPane = ({markdown, title, s_location}) => (
  <div className={cx('preview-pane')}>
    <h1 className={cx('title')}>
      {title} 
    </h1>
      <h3 className={cx('s_location')}>
        {s_location}
      </h3>
    <div>
      <MarkdownRender markdown={markdown} />
    </div>
  </div>
);

export default PreviewPane;