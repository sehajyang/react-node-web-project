import React, { Component } from 'react';

import { connect } from 'react-redux';
import PreviewPane from 'components/editor/PreviewPane';

class PreviewPaneContainer extends Component {
    render() {
        const { markdown, title, location } = this.props;
        return(
            <PreviewPane title={title} location={location} markdown={markdown} />
        );
    }
}

export default connect(
    (state) => ({
        title: state.editor.get('title'),
        location: state.editor.get('location'),
        markdown: state.editor.get('markdown')
    })
)(PreviewPaneContainer);

