import RFB from '@novnc/novnc';

export class VNC extends RFB {
  constructor (target, url, option, setState, componentThis) {
    super(target, url, option);
    this.setState = setState.bind(componentThis);
  }

  _connect () {
    super._connect();

    this.setState((state) => {
      console.log(state);
      return {
        isConnect: true
      }
    });
  }
}
