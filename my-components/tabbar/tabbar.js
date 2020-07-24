import Notification from './notification'

let tabbarInstance;

function getTabbarInstance() {
  tabbarInstance = tabbarInstance || Notification.newInstance();
  return tabbarInstance;
}

function notice() {
  let instance = getMessageInstance();
  instance.add()
}

export default {
  info(options) {
    return notice(options)
  }
}
