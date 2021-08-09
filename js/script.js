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
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = 'navbar-bg-color navbar navbar-light pl-lg-0 py-lg-0 border-bottom border-white navbar-expand-lg'; 
  else nav.className = 'scroll navbar navbar-light pl-lg-0 py-lg-0 border-bottom border-white navbar-expand-lg';
};

let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);


tabTogglers.forEach(function(toggler) {
    toggler.addEventListener("click", function(e) {
      e.preventDefault();
  
      let tabName = this.getAttribute("href");
  
      let tabContents = document.querySelector("#tab-contents");
  
      for (let i = 0; i < tabContents.children.length; i++) {
        
        tabTogglers[i].classList.remove("font-weight-bold", "border-bottom", "border-dark");  
        tabContents.children[i].classList.remove("d-none");
        if ("#" + tabContents.children[i].id === tabName) {
          continue;
        }
        tabContents.children[i].classList.add("d-none");
        
      }
      e.target.classList.add("font-weight-bold", "border-bottom", "border-dark");
    });
  });
  
document.getElementById("default-tab").click();


// javascript for mobile tabs

let mobileTabsContainer = document.querySelector("#mobile-tabs");

let mobileTabTogglers = mobileTabsContainer.querySelectorAll("a");
console.log(mobileTabTogglers);


mobileTabTogglers.forEach(function(toggler) {
    toggler.addEventListener("click", function(e) {
      e.preventDefault();
  
      let tabName = this.getAttribute("href");
  
      let mobileTabContents = document.querySelector("#mobile-tab-contents");
  
      for (let i = 0; i < mobileTabContents.children.length; i++) {
        
        mobileTabTogglers[i].classList.remove("font-weight-bold", "border-bottom", "border-dark");  
        mobileTabContents.children[i].classList.remove("d-none");
        if ("#" + mobileTabContents.children[i].id === tabName) {
          continue;
        }
        mobileTabContents.children[i].classList.add("d-none");
        
      }
      e.target.classList.add("font-weight-bold", "border-bottom", "border-dark");
    });
  });
  
document.getElementById("mobile-default-tab").click();

// grab everything we need
// const btn = document.querySelector(".mobile-menu-button");
// const sidebar = document.querySelector(".sidebar");

// // add our event listener for the click
// btn.addEventListener("click", () => {
//   sidebar.classList.toggle("-translate-x-full");
//   sidebar.classList.add("z-10");
// });
