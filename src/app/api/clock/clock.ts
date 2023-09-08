export function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = 'AM';

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = 'PM';
  }

  const hours = hh < 10 ? '0' + hh : hh;
  const minutes = mm < 10 ? '0' + mm : mm;
  const seconds = ss < 10 ? '0' + ss : ss;

  let time = hours + ':' + minutes + ':' + seconds + ' ' + session;

  setTimeout(function () {
    currentTime();
  }, 1000);

  return time;
}
