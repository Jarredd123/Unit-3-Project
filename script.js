// Declare variables below to save the different divs of your story.
let Plankton = document.querySelector(".option-one");      
let Spongebob = document.querySelector(".option-two");   
let optionOneScreen = document.querySelector(".option-one-screen"); 
let storyOpening = document.querySelector(".story-opening"); 
let buttons = document.querySelector(".buttons"); 
let optionTwoScreen = document.querySelector(".option-two-screen");
let StealIt = document.querySelector(".Steal-It");
let LeaveKrabs = document.querySelector(".Leave-Krabs-Alone"); 
let OptionOneEnd = document.querySelector(".option-one-end");
let OptionOneContinued = document.querySelector(".option-one-Continued");
let GoToWork = document.querySelector(".Go-To-Work"); 
let OptionTwoEnd = document.querySelector(".option-two-end"); 
let StayHome = document.querySelector(".StayHome");
let optionTwoOtherEnd = document.querySelector(".option-two-other-end");
// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
Plankton.addEventListener('click', function(){
    storyOpening.style.display = "none";
    buttons.style.display = "none";
    optionOneScreen.style.display = "block";
});
StealIt.addEventListener('click', function(){
    optionOneScreen.style.display = "none";
    OptionOneEnd.style.display = "block";         
});
LeaveKrabs.addEventListener('click', function(){
    optionOneScreen.style.display = "none";
    OptionOneContinued.style.display = "block";         
});
Spongebob.addEventListener('click', function(){
    storyOpening.style.display = "none";
    buttons.style.display = "none";
    optionTwoScreen.style.display = "block";         
});
GoToWork.addEventListener('click', function(){
    optionTwoScreen.style.display = "none";
    OptionTwoEnd.style.display = "block";         
});
StayHome.addEventListener('click', function(){
    optionTwoScreen.style.display = "none";
    optionTwoOtherEnd.style.display = "block";         
});