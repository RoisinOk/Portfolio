/**
 * Created by roisinokeeffe on 14/09/2015.
 */
//var portItem = document.getElementById("portItem");
//var sizePortItems = portItem.style.width;
//console.log(sizePortItems);

//var windowHeight = window.innerHeight;
//console.log(windowHeight);
//
//var titleDiv =  document.getElementById("titleDiv");
//var aboutDiv =  document.getElementById("aboutDiv");
//var portfolioDiv =  document.getElementById("portfolioDiv");
//var contactDiv =  document.getElementById("contactDiv");
//
//titleDiv.style.height = windowHeight + "px";
//aboutDiv.style.height = (windowHeight-70) + "px";
//contactDiv.style.height = (windowHeight-70) + "px";


//================================================================================
//CODE TO ANIMATE ABOUT ICON
//================================================================================

var aboutIcon = document.getElementById("aboutIcon");
var animationAbout = new TimelineMax({repeat:0});
animationAbout.pause();

var svgPathsAbout = aboutIcon.getElementsByTagName("path");

for (var x = 0; x < svgPathsAbout.length; x++) {
    //select a path
    var pathAbout = svgPathsAbout[x];
    //get the pixel length of the SVG path
    var pathDimensionsAbout = pathAbout.getTotalLength();
    // apply styles to stroke-dasharray and stroke-dashoffset
    pathAbout.style.strokeDasharray = pathDimensionsAbout + " " + pathDimensionsAbout;
    pathAbout.style.strokeDashoffset = pathDimensionsAbout;
    if(x>0){
        console.log("x is greater than 0");
        animationAbout.to(pathAbout.style, 2, {strokeDashoffset: 0}, "-=2");
    }else {
        console.log("x is not greater than 0");
        animationAbout.to(pathAbout.style, 2, {strokeDashoffset: 0});
    }
}
aboutIcon.style.display = "block";
//animationAbout.play();

//================================================================================
//CODE TO ANIMATE PORTFOLIO ICON
//================================================================================

var portfolioIcon = document.getElementById("portfolioIcon");

var animationPortfolio = new TimelineMax({repeat:0});           //Declare a new timeline
animationPortfolio.pause();                                     //Pause it at the beginning

var pathsPortfolio = portfolioIcon.getElementsByTagName("path");    //Gets all of the paths that make up portfolioIcon and put them into an array

for(var i=0; i < pathsPortfolio.length; i++){                               //loop through all paths that make up portfolioIcon, and for each:
    var portfolioPath = pathsPortfolio[i];                                  //select the path
    var pathLength = portfolioPath.getTotalLength();                        //Find out how long it is
    portfolioPath.style.strokeDasharray = pathLength +" "+ pathLength;      //Apply this to the stroke dask size (Makes the dash the length of the whole path)
    portfolioPath.style.strokeDashoffset = pathLength;                      //and also the stroke dash offset. (Moves the dash to hide the path)
    if(i>0){
        console.log("i is greater than 0");
        animationPortfolio.to(portfolioPath.style, 2, {strokeDashoffset: 0}, "-=2");
    }else {
        console.log("i is not greater than 0");
        animationPortfolio.to(portfolioPath.style, 2, {strokeDashoffset: 0});
    }
}//end of for loop

portfolioIcon.style.display = "block";
//animationPortfolio.play();
//================================================================================
//CODE TO ANIMATE CONTACT ICON
//================================================================================


var contactIcon = document.getElementById("contactIcon");

var animationContact = new TimelineMax({repeat:0});           //Declare a new timeline
animationContact.pause();                                     //Pause it at the beginning

var pathsPlane = contactIcon.getElementsByTagName("path");    //Gets all of the paths that make up portfolioIcon and put them into an array

for(var i=0; i < pathsPlane.length; i++){                               //loop through all paths that make up portfolioIcon, and for each:
    var planePath = pathsPlane[i];                                      //select the path
    var pathLength = planePath.getTotalLength();                        //Find out how long it is
    planePath.style.strokeDasharray = pathLength +" "+ pathLength;      //Apply this to the stroke dask size (Makes the dash the length of the whole path)
    planePath.style.strokeDashoffset = pathLength;                      //and also the stroke dash offset. (Moves the dash to hide the path)
    if(i>0){
        console.log("i is greater than 0");
        animationContact.to(planePath.style, 2, {strokeDashoffset: 0}, "-=2");
    }else {
        console.log("i is not greater than 0");
        animationContact.to(planePath.style, 2, {strokeDashoffset: 0});
    }
}//end of for loop

contactIcon.style.display = "block";
//animationContact.play();

//================================================================================
//CODE TO ANIMATE PENLEFT ICON
//================================================================================


var penLeft = document.getElementById("penLeft");

var animationpenLeft = new TimelineMax({repeat:0});           //Declare a new timeline
animationpenLeft.pause();                                     //Pause it at the beginning

var pathsPenLeft = penLeft.getElementsByTagName("path");    //Gets all of the paths that make up portfolioIcon and put them into an array

for(var i=0; i < pathsPenLeft.length; i++){                               //loop through all paths that make up portfolioIcon, and for each:
    var pathsPenLeft = pathsPenLeft[i];                                      //select the path
    var pathLength = pathsPenLeft.getTotalLength();                        //Find out how long it is
    pathsPenLeft.style.strokeDasharray = pathLength +" "+ pathLength;      //Apply this to the stroke dask size (Makes the dash the length of the whole path)
    pathsPenLeft.style.strokeDashoffset = pathLength;                      //and also the stroke dash offset. (Moves the dash to hide the path)
    if(i>0){
        console.log("i is greater than 0");
        animationpenLeft.to(pathsPenLeft.style, 2, {strokeDashoffset: 0}, "-=2");
    }else {
        console.log("i is not greater than 0");
        animationpenLeft.to(pathsPenLeft.style, 2, {strokeDashoffset: 0});
    }
}//end of for loop

if(window.innerWidth > 480) {
    penLeft.style.display = "block";
    animationpenLeft.play();
}else{
    penLeft.style.display = "none";
}

//================================================================================
//CODE TO ANIMATE PENRIGHT ICON
//================================================================================


var penRight = document.getElementById("penRight");

var animationpenRight = new TimelineMax({repeat:0});           //Declare a new timeline
animationpenRight.pause();                                     //Pause it at the beginning

var pathsPenRight = penRight.getElementsByTagName("path");    //Gets all of the paths that make up portfolioIcon and put them into an array

for(var i=0; i < pathsPenRight.length; i++){                               //loop through all paths that make up portfolioIcon, and for each:
    var pathsPenRight = pathsPenRight[i];                                      //select the path
    var pathLength = pathsPenRight.getTotalLength();                        //Find out how long it is
    pathsPenRight.style.strokeDasharray = pathLength +" "+ pathLength;      //Apply this to the stroke dask size (Makes the dash the length of the whole path)
    pathsPenRight.style.strokeDashoffset = pathLength;                      //and also the stroke dash offset. (Moves the dash to hide the path)
    if(i>0){
        console.log("i is greater than 0");
        animationpenRight.to(pathsPenRight.style, 2, {strokeDashoffset: 0}, "-=2");
    }else {
        console.log("i is not greater than 0");
        animationpenRight.to(pathsPenRight.style, 2, {strokeDashoffset: 0});
    }
}//end of for loop
if(window.innerWidth > 480){
    penRight.style.display = "block";
    animationpenRight.play();
}else{
    penRight.style.display = "none";
}

//================================================================================
//CODE TO ANIMATE DECORIGHT ICON
//================================================================================


var decoRight = document.getElementById("decoRight");

var animationDecoRight = new TimelineMax({repeat:0});           //Declare a new timeline
animationDecoRight.pause();                                     //Pause it at the beginning

var pathsDecoRight = decoRight.getElementsByTagName("path");    //Gets all of the paths that make up portfolioIcon and put them into an array

for(var i=0; i < pathsDecoRight.length; i++){                               //loop through all paths that make up portfolioIcon, and for each:
    var pathDecoRight = pathsDecoRight[i];                                      //select the path
    var pathLength = pathDecoRight.getTotalLength();                        //Find out how long it is
    pathDecoRight.style.strokeDasharray = pathLength +" "+ pathLength;      //Apply this to the stroke dask size (Makes the dash the length of the whole path)
    pathDecoRight.style.strokeDashoffset = pathLength;                      //and also the stroke dash offset. (Moves the dash to hide the path)
    if(i>0){
        console.log("i is greater than 0");
        animationDecoRight.to(pathDecoRight.style, 2, {strokeDashoffset: 0}, "-=2");
    }else {
        console.log("i is not greater than 0");
        animationDecoRight.to(pathDecoRight.style, 2, {strokeDashoffset: 0});
    }
}//end of for loop
if(window.innerWidth > 480){
    decoRight.style.display = "block";
    animationDecoRight.play();
}else{
    decoRight.style.display = "none";
}

//================================================================================
//CODE TO ANIMATE DECOLEFT ICON
//================================================================================


var decoLeft = document.getElementById("decoLeft");

var animationDecoLeft = new TimelineMax({repeat:0});           //Declare a new timeline
animationDecoLeft.pause();                                     //Pause it at the beginning

var pathsDecoLeft = decoLeft.getElementsByTagName("path");    //Gets all of the paths that make up portfolioIcon and put them into an array

for(var i=0; i < pathsDecoLeft.length; i++){                               //loop through all paths that make up portfolioIcon, and for each:
    var pathDecoLeft = pathsDecoLeft[i];                                      //select the path
    var pathLength = pathDecoLeft.getTotalLength();                        //Find out how long it is
    pathDecoLeft.style.strokeDasharray = pathLength +" "+ pathLength;      //Apply this to the stroke dask size (Makes the dash the length of the whole path)
    pathDecoLeft.style.strokeDashoffset = pathLength;                      //and also the stroke dash offset. (Moves the dash to hide the path)
    if(i>0){
        console.log("i is greater than 0");
        animationDecoLeft.to(pathDecoLeft.style, 2, {strokeDashoffset: 0}, "-=2");
    }else {
        console.log("i is not greater than 0");
        animationDecoLeft.to(pathDecoLeft.style, 2, {strokeDashoffset: 0});
    }
}//end of for loop
if(window.innerWidth > 480){
    decoLeft.style.display = "block";
    animationDecoLeft.play();
}else{
    decoLeft.style.display = "none";
}


//================================================================================
//CODE TO ANIMATE DECOMIDDLE ICON
//================================================================================

var decoMiddleIcon = document.getElementById("decoMiddle");
var animationDecoMiddle = new TimelineMax({repeat:0});
animationDecoMiddle.pause();

var svgPathsDM = decoMiddleIcon.getElementsByTagName("path");

for (var x = 0; x < svgPathsDM.length; x++) {
    //select a path
    var pathDecoMiddle = svgPathsDM[x];
    //get the pixel length of the SVG path
    var pathDimensionsDM = pathDecoMiddle.getTotalLength();
    // apply styles to stroke-dasharray and stroke-dashoffset
    pathDecoMiddle.style.strokeDasharray = pathDimensionsDM + " " + pathDimensionsDM;
    pathDecoMiddle.style.strokeDashoffset = pathDimensionsDM;
    if(x>0){
        console.log("x is greater than 0");
        animationDecoMiddle .to(pathDecoMiddle.style, 2, {strokeDashoffset: 0}, "-=2");
    }else {
        console.log("x is not greater than 0");
        animationDecoMiddle .to(pathDecoMiddle.style, 2, {strokeDashoffset: 0});
    }
}

decoMiddleIcon.style.display = "block";
decoMiddleIcon.style.margin = "auto";
animationDecoMiddle.play();

//================================================================================
//ON-CLICK FUNCTIONS FOR BUTTONS
//================================================================================

function drawPortfolioIcon(){
    TweenMax.to(window, 1, {scrollTo:{y:1420, x:0}, ease:Power4.easeOut});
    animationPortfolio.play();
}

function drawContactIcon(){
    TweenMax.to(window, 1, {scrollTo:{y:2729, x:0}, ease:Power4.easeOut});
    animationContact.play();
}

function drawAboutIcon(){
    TweenMax.to(window, 1, {scrollTo:{y:683, x:0}, ease:Power4.easeOut});
    animationAbout.play();
}

function toTop(){
    findOutY();
    TweenMax.to(window, 1, {scrollTo:{y:0, x:0}, ease:Power4.easeOut});
}

function findOutY(){
    console.log(window.scrollY);
}


window.onscroll = function() {onScrollDown()};

function onScrollDown() {
    if (window.scrollY> 2500) {
        animationContact.play();
    }else if (window.scrollY> 1000){
        animationPortfolio.play();
    } else if (window.scrollY> 400) {
        animationAbout.play();
    }
}


////=============================================================
//
//
//(function() {
//    window.onload = function() {
//        var menu = document.getElementById('menu');
//        var init = menu.offsetTop;
//        var docked;
//
//        window.onscroll = function() {
//            if (!docked && (menu.offsetTop - scrollTop() < 0)) {
//                menu.style.top = 0;
//                menu.style.position = 'fixed';
//                menu.className = 'docked';
//                docked = true;
//            } else if (docked && scrollTop() <= init) {
//                menu.style.position = '';
//                menu.style.top = init + 'px';
//                menu.className = menu.className.replace('docked','');
//                docked = false;
//            }
//        };
//    };
//
//    function scrollTop() {
//        return document.body.scrollTop || document.documentElement.scrollTop;
//    }
//})();