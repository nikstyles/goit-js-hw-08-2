import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const keyStorage = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeSave, 1000));
function onTimeSave(timeupdate) {
  localStorage.setItem(keyStorage, timeupdate.seconds);
}

const getStorageValue = localStorage.getItem(keyStorage);
if (getStorageValue) {
  player.setCurrentTime(getStorageValue);
}
