import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';

//컴포넌트를 랜더링함

const cx = classNames.bind(styles);

const PageTemplate = () => (
    <div className={cx('page-template')}>
    <Header/>
    </div>
);

export default PageTemplate;