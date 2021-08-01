$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      769:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

window.onscroll = () => {
  const nav = document.querySelector('#navbar-id');
  if(this.scrollY <= 10) nav.className = 'navbar-bg-color navbar navbar-light pl-lg-0 py-lg-0 border-bottom border-white navbar-expand-lg'; else nav.className = 'scroll navbar navbar-light pl-lg-0 py-lg-0 border-bottom border-white navbar-expand-lg';
};



// grab everything we need
// const btn = document.querySelector(".mobile-menu-button");
// const sidebar = document.querySelector(".sidebar");

// // add our event listener for the click
// btn.addEventListener("click", () => {
//   sidebar.classList.toggle("-translate-x-full");
//   sidebar.classList.add("z-10");
// });
