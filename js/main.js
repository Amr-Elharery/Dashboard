let yearlyTargetSpans = document.querySelectorAll(".prog > span");
let yearlyTargetProgSpans = document.querySelectorAll(".prog span span");

window.onload = () => {
  // Progress Fill
  yearlyTargetSpans.forEach(e => {
    e.style.transition = 'width 2s ease-out'
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
    }, 30)
  })

}

// Backup Manager Boxes
let divs = document.querySelectorAll(".settings-page .plans .plan");

divs.forEach(e => {
  e.addEventListener("click", (ele) => {
    divs.forEach(e => {
      e.classList.remove("active");
    })
    ele.currentTarget.classList.toggle("active");
  })
})