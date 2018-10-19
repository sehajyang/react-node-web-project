import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown'; 
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

const cx = classNames.bind(styles);

class EditorPane extends Component {

  editor = null 
  codeMirror = null 
  cursor= null
  
  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true, // 좌측에 라인 넘버 띄우기
      lineWrapping: true // 내용이 너무 길면 다음 줄에 작성
    });
    this.codeMirror.on('change', this.handleChangeMarkdown);
  }

  componentDidMount() {
    this.initializeEditor();
  }

  handleChange = (e) => {
    const { onChangeInput } = this.props;
    const { value, name } = e.target;
    onChangeInput({name, value});
  }

  handleChangeMarkdown = (doc) => {
    const { onChangeInput } = this.props;
    this.cursor = doc.getCursor(); 
    onChangeInput({
      name: 'markdown',
      value: doc.getValue()
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.markdown !== this.props.markdown) {
      const { codeMirror, cursor } = this;
      if(!codeMirror) return; 
      codeMirror.setValue(this.props.markdown);
      if(!cursor) return; // 커서가 없는 경우
      codeMirror.setCursor(cursor);
    }
  }
  
  render() {
    const { handleChange } = this;
    const { s_location, tags, title, } = this.props;

    return (
      <div className={cx('editor-pane')}>
        <input
         className={cx('title')} 
         placeholder="제목을 입력하세요" 
         name="title"
         value={title}
         onChange={handleChange} 
         />
      <div className={cx('s_location')}>
        <input className={cx('s_location')}
          name="s_location" 
          placeholder="장소를 입력하세요" 
          value={s_location}
          onChange={handleChange}
        />
      </div>
        <div className={cx('code-editor')} ref={ref => this.editor=ref}></div>
        <div className={cx('tags')}>
          <div className={cx('description')}>태그</div>
          <input 
          name="tags" 
          placeholder="참가 멤버를 입력(쉼표로 구분)" 
          value={tags}
          onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}


export default EditorPane;