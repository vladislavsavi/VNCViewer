import React from 'react';
import { withRouter } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { itemList } from './itemList';
import './SideList.scss';

class Menu extends React.Component {
  state = { open: false };

  componentDidMount () {
    document.addEventListener('keydown', this.CtlB);
  }

  handleClick (rout) {
    this.props.history.push(rout);
  }

  toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ open });
  };

  CtlB = (e) => {
    if (e.ctrlKey && e.code === 'KeyB') {
      this.setState(({ open }) => ({ open: !open }));
    }
  };

  list = () => (
    <div
      className='side_list-left_Menu'
      role='presentation'
      onClick={this.toggleDrawer(false)}
      onKeyDown={this.toggleDrawer(false)}
    >
      <List color='primary'>
        {itemList.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => this.handleClick(item.rout)}
          >
            <ListItemIcon>
              <Icon fontSize='small' color='secondary' className={item.iconClass} />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  render () {
    const { open } = this.state;
    return (
      <div className='side_list-top_nav_bar'>
        <Tooltip title='CTRL+B'>
          <IconButton color='secondary' onClick={this.toggleDrawer(!open)} aria-label='CTRL+B'>
            <Icon fontSize='small' className='fa fa-bars' />
          </IconButton>
        </Tooltip>
        <div>
          <IconButton color='secondary'>
            <Icon fontSize='small' className='fa fa-home' />
          </IconButton>
          <IconButton color='secondary'>
            <Icon fontSize='small' className='fa fa-area-chart' />
          </IconButton>
        </div>
        <Drawer open={open} onClose={this.toggleDrawer(!open)}>
          {this.list()}
        </Drawer>
      </div>
    );
  }
}

export const SideList = withRouter(Menu);
