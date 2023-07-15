let sideNav = document.getElementById("side-nav");
sideNav.style.right = "-250px";
function showhideNav(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
    }
    else{
         sideNav.style.right = "-250px";
     }
}
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});
