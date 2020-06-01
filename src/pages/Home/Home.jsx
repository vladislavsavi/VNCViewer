import React from 'react';
import * as mui from '@material-ui/core';
import { isEmpty } from 'lodash';
import { VNC } from '../../VNC';

export class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isConnect: false,
      password: '',
      connectInfo: null,
      host: '',
      port: '',
      blankFields: [],
      session: null
    };
  }

  submit = () => {
    this.validate()
      .then(this.connect);
  };

  connect = () => {
    const { password, host, port, blankFields } = this.state;
    if (!isEmpty(blankFields)) {
      return;
    }
    const canvas = document.getElementById('target');
    const r = new VNC(
      canvas,
      `ws://${host}:${port}/websockify`,
      {
        dragViewport: true,
        resizeSession: true,
        credentials: {
          password
        }
      },
      this.setState,
      this
    );
    console.log(r)
    r._display.resize(100, 100);
  };

  validate = () => {
    const needToCheck = ['port', 'host', 'password'];
    const blankFields = [];
    for (const key of needToCheck) {
      if (!this.state[key]) {
        blankFields.push(key);
      }
    }
    return new Promise((resolve) => {
      this.setState({ blankFields }, () => resolve());
    });
  };

  renderLoginForm () {
    const { password, host, port, isConnect } = this.state;
    if (!isConnect) {
      return (
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            padding: '20px 0',
            width: '500px'
          }}
          noValidate
          onSubmit={this.submit}
        >
          <mui.TextField
            placeholder='host'
            required
            error={this.hasError('host')}
            value={host}
            color='secondary'
            onChange={(e) => this.setState({ host: e.target.value })}
          />
          <mui.TextField
            placeholder='port'
            required
            error={this.hasError('port')}
            value={port}
            color='secondary'
            onChange={(e) => this.setState({ port: e.target.value })}
          />
          <mui.TextField
            placeholder='password'
            required
            error={this.hasError('password')}
            type='password'
            value={password}
            color='secondary'
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <mui.Button color='secondary' type='submit'>Connect</mui.Button>
        </form>
      );
    }
  }

  hasError = (key) => {
    const { blankFields } = this.state;
    return blankFields.includes(key);
  };

  render () {
    const { isConnect } = this.state;
    return (
      <div style={{
        display: isConnect ? 'block' : 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
      >
        {this.renderLoginForm()}
        <div id='target' style={{ width: '100%' }} />
      </div>
    );
  }
}
