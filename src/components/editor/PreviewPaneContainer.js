import React, { Component } from 'react';

import { connect } from 'react-redux';
import PreviewPane from 'components/editor/PreviewPane';

class PreviewPaneContainer extends Component {
    render() {
        const { markdown, title, s_location } = this.props;
        return(
            <PreviewPane title={title} s_location={s_location} markdown={markdown} />
        );
    }
}

export default connect(
    (state) => ({
        title: state.editor.get('title'),
        s_location: state.editor.get('s_location'),
        markdown: state.editor.get('markdown')
    })
)(PreviewPaneContainer);

