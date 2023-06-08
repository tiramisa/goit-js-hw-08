import Player from '@vimeo/player';
import { throttle } from 'lodash';

const video = document.querySelector('iframe');
const player = new Player(video);

const restoreCurrentTime = async () => {
  const currentTime = localStorage.getItem('videoplayer-current-time') || 0;

  await player.ready();
  player.setCurrentTime(currentTime);
};

const updateCurrentTime = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(updateCurrentTime, 1000));

document.addEventListener('DOMContentLoaded', restoreCurrentTime);
