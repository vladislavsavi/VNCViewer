import RFB from '@novnc/novnc';

export class VNC extends RFB {
  constructor (target, url, option, setState, componentThis) {
    super(target, url, option);
    this.setState = setState.bind(componentThis);
  }

  _disconnect () {
    super._disconnect();
    this.setState(() => {
      return {
        isConnect: false
      }
    });
  }

  _resize (width, height) {
    super._resize(width, height);
    console.log(width, height);
  }

  _connect () {
    super._connect();

    this.setState(() => {
      return {
        isConnect: true
      }
    });
  }
}
