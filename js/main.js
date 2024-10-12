var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    autoplay: true,
    perMove: 1,
    breakpoints: {
      768: {
          perPage: 1,  // Show 1 slide per page below 768px
      },
      480: {
          perPage: 1,  // Show 1 slide per page below 480px
      },
  }
    
  } );
  
  splide.mount();


var loaderpage = document.querySelector(".loader-page");

window.onload = function () {
    // Wait for the page to load completely, then hide the loader page
  setTimeout(() => {
    loaderpage.style.display = "none";
  }, 200); // Adjust the delay as needed
};
  



let nums = document.querySelectorAll(".nums .state-num");
let section = document.querySelector(".stats-section");
let started = false; // Function Started ? No

nums.forEach((num) => startCount(num));


function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function () {
      // Check if the accordion button is not already active (i.e., it's being opened)
      if (!this.classList.contains('collapsed')) {
          this.classList.add('active');
      }
  });
});