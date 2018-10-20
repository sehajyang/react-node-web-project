import React from 'react';

import styles from './TestList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TestItem = () => {
  return(
    <div className={cx('test-item')}>
    RightList
  </div>
  )
}

const TestList = () => (
  <div className={cx('test-list')}>
    <TestItem/>
  </div>
);

export default TestList;