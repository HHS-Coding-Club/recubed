function utility_setKeyDelay(keyDelayTime: number, keyDelay: boolean, keys: boolean[]) {
  keys = [];
  keyDelay = true;
  setTimeout(function () {
    keyDelay = false;
  }, keyDelayTime);
}
