function showDropDown(){
    document.getElementById("navbar").classList.toggle("show");
    document.getElementById("hamburgerIcon").classList.toggle("hide");
    document.getElementById("closeIcon").classList.toggle("hide");

    // document.getElementById("body").classList.toggle("stop-scrolling")

    document.getElementById("navbar-dropdown_ul_card1").classList.remove("show")
    document.getElementById("navbar-dropdown_ul_card2").classList.remove("show")
    document.getElementById("navbar-dropdown_ul_card3").classList.remove("show")
}

function open_navbar_dropdown_ul_card1(){
    document.getElementById("navbar-dropdown_ul_card2").classList.remove("show")
    document.getElementById("navbar-dropdown_ul_card3").classList.remove("show")
    document.getElementById("navbar-dropdown_ul_card1").classList.toggle("show");
}
function open_navbar_dropdown_ul_card2(){
    document.getElementById("navbar-dropdown_ul_card1").classList.remove("show")
    document.getElementById("navbar-dropdown_ul_card3").classList.remove("show")
    document.getElementById("navbar-dropdown_ul_card2").classList.toggle("show");
}
function open_navbar_dropdown_ul_card3(){
    document.getElementById("navbar-dropdown_ul_card1").classList.remove("show")
    document.getElementById("navbar-dropdown_ul_card2").classList.remove("show")
    document.getElementById("navbar-dropdown_ul_card3").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {

    document.getElementById("navbar-main-ul").addEventListener('click',function(event){
        event.stopPropagation();
        return;
    });

    if (!event.target.matches('.navbar-dropdown_option') 
        && !event.target.matches('#navbar')) {
        
      var dropdowns = document.getElementsByClassName("navbar-dropdown_ul_card");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }


    
    document.getElementById("navbar").addEventListener('click',function(event){
        event.stopPropagation();
        return;
    });
    if(!event.target.matches('#closeIcon') && !event.target.matches('#hamburgerIcon')){
        if(!document.getElementById("closeIcon").classList.contains('hide')){
            document.getElementById("closeIcon").classList.add('hide')
            document.getElementById("hamburgerIcon").classList.remove('hide')
            document.getElementById("navbar").classList.toggle("show")
        }
    }
  }