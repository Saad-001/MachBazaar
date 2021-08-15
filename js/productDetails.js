let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
    toggler.addEventListener("click", function(e) {
      e.preventDefault();

      console.log(e.target)
  
      let tabName = this.getAttribute("href");
  
      let tabContents = document.querySelector("#tab-contents");
        
      for (let i = 0; i < tabContents.children.length; i++) {
        tabContents.children[i].classList.remove("d-none");
        if ("#" + tabContents.children[i].id === tabName) {
          continue;
        }
        tabContents.children[i].classList.add("d-none"); 
      }
    });
  });
  
document.getElementById("default-tab").click();


// description tab related js code

let descriptionTabsContainer = document.querySelector("#descriptionTabs");

let descriptionTabTogglers = descriptionTabsContainer.querySelectorAll("a");
console.log(descriptionTabTogglers);


descriptionTabTogglers.forEach(function(toggler) {
    toggler.addEventListener("click", function(e) {
      e.preventDefault();
  
      let descriptionTabName = this.getAttribute("href");
  
      let descriptionTabContents = document.querySelector("#descriptionTabContents");
  
      for (let i = 0; i < descriptionTabContents.children.length; i++) {
        
        descriptionTabTogglers[i].classList.remove("border-bottom", "border-muted");  
        descriptionTabContents.children[i].classList.remove("d-none");
        if ("#" + descriptionTabContents.children[i].id === descriptionTabName) {
          continue;
        }
        descriptionTabContents.children[i].classList.add("d-none");
        
      }
      e.target.classList.add("border-bottom", "border-muted");
    });
  });
  
document.getElementById("description-default-tab").click();
