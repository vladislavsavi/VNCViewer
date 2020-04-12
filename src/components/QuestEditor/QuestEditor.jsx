import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Paper } from '@material-ui/core';
import { QuestEditorState } from './state';
import './QuestEditor.scss';

export class QuestEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = new QuestEditorState();
  }

    onEditorStateChange = (editorState) => {
      this.setState({ editorState });
    };

    render () {
      const { editorState } = this.state;
      return (
        <Paper>
          <Editor
            editorState={editorState}
            toolbarClassName='draft-toolbar'
            wrapperClassName='draft-wrapper'
            editorClassName='draft-editor'
            onEditorStateChange={this.onEditorStateChange}
          />
        </Paper>
      );
    }
}
