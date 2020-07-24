import Notification from './notification'

let messageInstance;

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance();
  return messageInstance;
}

function notice({duration = 3000, content = ''}) {
  let instance = getMessageInstance();
  instance.add({
    duration,
    content
  })
}

export default {
  info(options) {
    return notice(options)
  }
}
