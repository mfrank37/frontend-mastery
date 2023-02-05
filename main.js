const getOptions = (body, data, timestamp = Date.now()) => {
  return {
    body,
    data,
    tag: timestamp, // a unique ID
    showTrigger: timestamp, // set the time for the push notification
    badge: './screenshot.png',
    icon: './logo-192x192.png',
    actions: [
      {action: 'open', title: 'Open'},
      {action: 'close', title: 'Close'}
    ]
  }
}

const defaultNotification = {
  title: 'Checkout updates on Github!',
  options: getOptions('Frontend mentor solutions, freeCodeCamp and more on Github.', {url: 'https://github.com/mfrank37'})
}

const sendNotification = async (notificationConfig = defaultNotification) => {
  const {title, options} = notificationConfig;
  const reg = await navigator.serviceWorker.getRegistration();
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    alert('You need to allow push notifications');
  } else {
    reg.showNotification(title, options);
  }
};

const interval = setInterval(() => sendNotification(), 10 * 60 * 1000); // 10 minutes

document.querySelector('h1').onclick = (e) => {
  sendNotification();
};

document.querySelector('h1').ondblclick = async () => {
  const reg = await navigator.serviceWorker.getRegistration();
  const notifications = await reg.getNotifications({
    includeTriggered: true
  });
  notifications.forEach(notification => notification.close());
  alert(`${notifications.length} notification(s) cancelled`);
};

document.querySelector('footer').ondblclick = async () => {
  clearInterval(interval);
}

const aside = document.querySelector('aside');
const iconBulb = document.querySelector('.icon.bulb');
const iconXMark = document.querySelector('.icon:not(.bulb)');

iconBulb.addEventListener('click', () => {
  aside.classList.add('open');
});
iconXMark.addEventListener('click', () => {
  aside.classList.remove('open');
})
