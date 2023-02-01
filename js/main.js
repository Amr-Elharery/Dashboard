let yearlyTargetSpans = document.querySelectorAll(".prog > span");
let yearlyTargetProgSpans = document.querySelectorAll(".prog span span");

window.onload = () => {
  // Progress Fill
  yearlyTargetSpans.forEach(e => {
    e.style.transition = '3s ease-out'
    e.style.width = `${e.dataset.progress}%`;
  })

  // Progress Counter
  yearlyTargetProgSpans.forEach(e => {
    // e.style.transition = '0.5s'
    let n = 1
    let int = setInterval(() => {
      e.innerHTML = `${n}%`
      if (n < e.parentElement.dataset.progress) {
        n++;
      } else {
        clearInterval(int);
      }
    }, 40)
  })

}