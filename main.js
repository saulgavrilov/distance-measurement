navigator.mediaDevices
  .getDisplayMedia({
    video: {
      facingMode: 'environment',
    },
  })
  .then((signal) => {
    const video = document.querySelector('.video');
    video.srcObject = signal;
    video.play();
  })
  .catch((e) => {
    console.log(e);
    return;
  });

window.addEventListener('deviceorientation', (e) => {
  let angle = e.beta - 90;

  if (angle < 0) {
    angle = 0;
  }

  const distance = 22;
  const height = Math.tan((angle * Math.PI) / 180) * distance;

  document.querySelector('.height').innerText = `${height.toFixed(1)}m`;
  document.querySelector('.degree').innerText = `${height.toFixed(1)}m`;

  console.log(angle);
});
