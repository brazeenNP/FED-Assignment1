//-----------------------------------------------NAV--------------------------------------------------------------------------------
    
//to show the sidebar when the width of the viewport gets too small by changing the display to its intended mode which is flex
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
//to hide the sidebar when the width of the viewport becomes a big enough size for all the words to be displayed, changing the display to none and hiding it from view
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//-----------------------------------------------MAIN HOME--------------------------------------------------------------------------------
//select the first page of the home
const parallax = document.querySelector(".page1-home")
//add event listener for the window, and make the function inside the event listener for simplicity sake (dont have to define it then call it by name and all that)
window.addEventListener("scroll", function(){
    //the value of how much the user has scrolled from the top of the page
    let offset = window.pageYOffset
    //change the background position of the page1-home to 0.7 times the speed of the rest of the elements for a parallax effect
    parallax.style.backgroundPositionY = offset * 0.8 + "px"
})

//-----------------------------------------------MAIN NEWS--------------------------------------------------------------------------------
function toggleTourarticles(){
    const tourcheck = document.querySelector('#news-tourbtn')
    //get a list of the elements with news-container1 class
    const tourarticles = document.querySelectorAll('.news-container1')
    for (let i = 0; i < tourarticles.length; i++) {
        if (tourcheck.checked) {
            //if checked, change to flex display so it can be seen
            tourarticles[i].style.display = 'flex';
        }
        else{
            //or else make it invisible
            tourarticles[i].style.display = 'none';
        }
    }
}
function toggleAlbumarticles(){
    const albumcheck = document.querySelector('#news-albumbtn')
    //get a list of the elements with news-container2 class
    const albumarticles = document.querySelectorAll('.news-container2')
    for (let i = 0; i < albumarticles.length; i++) {
        if (albumcheck.checked) {
            //if checked, change to flex display so it can be seen
            albumarticles[i].style.display = 'flex';
        }
        else{
            //or else make it invisible
            albumarticles[i].style.display = 'none';
        }
    }
}

//-----------------------------------------------MAIN TOUR--------------------------------------------------------------------------------

// to reset the contact form after the submit button is pressed
function resetForm(){
    document.querySelector(".tour-contactform").reset();
}