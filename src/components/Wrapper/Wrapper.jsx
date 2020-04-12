import React from 'react';
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TitleBar from 'frameless-titlebar';
import { Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@asts/theme';
import butterfly from '@asts/img/butterfly.png';
import { SideList } from '@components';
import './Wrapper.scss';

export class Wrapper extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isFullScreen: false
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.keyDown);
  }

  onFullScreenHandler = () => {
    this.setState(({ isFullScreen }) => ({ isFullScreen: !isFullScreen }))
  }

  keyDown = (e) => {
    if (e.code === 'F11') {
      this.onFullScreenHandler();
    }
  };

  render () {
    const { isFullScreen } = this.state;
    return (
      <div>
        {
          !isFullScreen &&
          (
            <TitleBar
              icon={butterfly}
              app='Butterfly Effect'
            />
          )
        }
        <HashRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography color='secondary'>
              <SideList onFullScreenHandler={this.onFullScreenHandler} />
              {this.props.children}
            </Typography>
          </ThemeProvider>
        </HashRouter>
      </div>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.node
};
