const downloadBtn = document.getElementById('download-btn');
const progressBar = document.querySelector('.progress-bar');

downloadBtn.addEventListener('click', () => {
  let progress = 0;

  const interval = setInterval(() => {
    progress += 5;
    console.log(progress);

    progressBar.innerHTML = progress

    if (progress >= 100) {
      clearInterval(interval);
    }
    progressBar.style.width = `${progress}%`;
  }, 200);
});

