import Notification from './notification'

let tabbarInstance;

function getTabbarInstance() {
  tabbarInstance = tabbarInstance || Notification.newInstance();
  return tabbarInstance;
}

function add() {
  let instance = getTabbarInstance();
  instance.add()
}

function remove() {
  let instance = getTabbarInstance();
  instance.remove()
}

export default {
  add() {
    return add()
  },
	remove() {
		return remove()
	}
}
