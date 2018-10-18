import React, { Component } from 'react';

import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class EditorPane extends Component {
  render() {
    return (
      <div className={cx('editor-pane')}>
        <input className={cx('title')} placeholder="제목을 입력하세요" name="title" />
        <input className={cx('location')} placeholder="장소를 입력하세요" name="location" />
        <div className={cx('code-editor')}></div>
        <div className={cx('tags')}>
          <div className={cx('description')}>태그</div>
          <input name="tags" placeholder="참가 멤버를 입력(쉼표로 구분)" />
        </div>
      </div>
    );
  }
}


export default EditorPane;