import React, { Component } from 'react';
import EditorHeader from 'components/editor/EditorHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import * as editorActions from 'store/modules/editor';

class EditorHeaderContainer extends Component {
  componentDidMount() {
    const { EditorActions, location } = this.props;
    EditorActions.initialize(); // 에디터를 초기화합니다.

    const { id } = queryString.parse(location.search);
    if (id) { 
      EditorActions.getPost(id);
    }
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  handleSubmit = async () => {
    const { title, s_location, markdown, tags, EditorActions, history, location } = this.props;
    const post = {
      title,
      s_location,
      body: markdown,
      // ,로 분리 후 공백 중복 값 제거
      tags: tags === "" ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
    };
    try {
      const { id } = queryString.parse(location.search);
      if(id) {
        await EditorActions.editPost({ id, ...post });
        history.push(`/post/${id}`);
        console.log({id});
        return;
      } 
      await EditorActions.writePost(post);
      history.push(`/post/${this.props.postId}`);
    } catch (e) {
      console.log(e);
    }
  }

    
  render() {
    const { handleGoBack, handleSubmit } = this;
    const { id } = queryString.parse(this.props.location.search);
    return (
      <EditorHeader
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
        isEdit={id ? true : false}
      />
    );
  }

}

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    s_location: state.editor.get('s_location'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags'),
    postId: state.editor.get('postId')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(withRouter(EditorHeaderContainer));
