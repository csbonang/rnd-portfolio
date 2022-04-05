const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Student-led Club.", "Collaborative Space.", "Community."];
// tDelay: holds the typing delay count at 200ms
const tDelay = 100;
// eDelay: holds the erasing delay count at 100ms
const eDelay = 60;
// newTextDelay: Delay between the current and the next string
const newTextDelay = 2000;
//  keep track of the elements in the array
let textArrayIndex = 0;
// starting from the first character
let charIndex = 0;

// type(): type a character, pause and delay before calling its self again
function type(){
    // type the next character if the last character of the current string
    // was not already typed
    if(charIndex < textArray[textArrayIndex].length){
       //remove blinking animation in case it is not already there
       if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
       typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
       charIndex++;
       setTimeout(type, tDelay);
    }
    else{
       //bring back typing class.
       cursorSpan.classList.remove('typing');
       setTimeout(erase,newTextDelay);
    }

}
function erase(){
    // if word is not completely removed, remove characters
    if(charIndex > 0){
       // remove blinking while erasing
       if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
       typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
       charIndex--;
       setTimeout(erase,eDelay);
    }
    else {
       cursorSpan.classList.remove('typing');
       textArrayIndex++;
       if(textArrayIndex >= textArray.length) textArrayIndex = 0;
       setTimeout(type,tDelay + 1100);
    }
}
// To specify the point of execution.
document.addEventListener('DOMContentLoaded', function(){
    //ensure array is not empty
    if(textArray.length) setTimeout(type,newTextDelay + 250);
});
