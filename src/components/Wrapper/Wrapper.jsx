import React from 'react';
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { remote } from 'electron';
import TitleBar from 'frameless-titlebar';
import { Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@asts/theme';
import brain from '@asts/img/brain.png';
import './Wrapper.scss';

export class Wrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isFullScreen: false
    }
  };

  componentDidMount () {
    document.addEventListener('keydown', this.keyDown);
  };

  onFullScreenHandler = () => {
    this.setState(({ isFullScreen }) => ({ isFullScreen: !isFullScreen }))
  };

  keyDown = (e) => {
    if (e.code === 'F11') {
      this.onFullScreenHandler();
    }
  };

  render () {
    const currentWindow = remote.getCurrentWindow();
    const { isFullScreen } = this.state;
    return (
      <div className='wrapper'>
        {
          !isFullScreen &&
            (
              <TitleBar
                currentWindow={currentWindow}
                icon={brain}
                app='VNCViewer'
                theme={{}}
                platform={process.platform}
              />
            )
        }
        <div className='scroll'>
          <HashRouter>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Typography color='secondary' style={{ height: '100%' }}>
                {this.props.children}
              </Typography>
            </ThemeProvider>
          </HashRouter>
        </div>
      </div>
    );
  };
}

Wrapper.propTypes = {
  children: PropTypes.node
};
