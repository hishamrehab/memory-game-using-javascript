 // Select the Start Game button
document.querySelector(".control-buttons span").onclick = function() {

    // prompt Window To Ask Name
let yourName = prompt("Whats your Name?");

// If Name Is Empty
if(yourName == null || yourName == "") {

 // set Name To UNknown
   document.querySelector(".name span").innerHTML ="unknown";

    // Name Is Not Empty

} else {
   // Set Name To Your Name
    document.querySelector(".name span").innerHTML =  yourName ;
}

 // Remove Splash Screen
 document.querySelector(".control-buttons").remove();
};

// Effect Duration
let duration= 1000;
 
 // Select Blocks container
let blocksContainer = document.querySelector(".memory-game-blocks");

// create Array og keys
let blocks =Array.from(blocksContainer.children);

// Create Range of Keys
// let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());

// Add Order css property to game block

blocks.forEach((block, index) => {

   block.style.order = orderRange[index];



   // Add Click Event
   block.addEventListener('click' , function (){
    //Trigger The Flip Block Function
    flipBlock(block);  
   });
});

// Flip Block Function
function flipBlock(selectedBlock) {

    // Add Class is-flipped
    selectedBlock.classList.add("is-flipped");

// collect all flipped cards
let allFlippedBlocks = blocks.filter(flipBlock => flipBlock.classList.contains('is-flipped'));

// If There is Two Selected Blocks
if(allFlippedBlocks.length == 2) {

// Stop ClicKing function     
stopClicking();

// check Matched function

checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1]);
}
}

// stop Clicking Function
function stopClicking() {

   // Add Class NO Clicking on Main Container
   blocksContainer.classList.add("noClicking");  

   setTimeout(() =>{
   
    // Remove Class NO Clicking after the Duration
    blocksContainer.classList.remove("noClicking");  

   },duration)
   
}

// check Matched block 
function checkMatchedBlocks(firstBlock, secondBlock) {


  let triesElement = document.querySelector(".tries span");
  
  
  if( firstBlock.dataset.technology === secondBlock.dataset.technology) {

    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');

  } else {

    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
   
    setTimeout(() => {
      
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
  
    }, duration);
  }
}

// shuffle Function
shuffle(orderRange);

function shuffle(array) {

 // setting vars
    let current = array.length,
    temp,
    random;

 while (current > 0) {

  //Get Random Number
  random = Math.floor(Math.random() * current);

   // Decrease Length By One

  current--;

  // [1] save current element in Stash
  temp = array[current];

  // [2] current Element = Random Element
  array[current] = array[random];

  // [3] Random Element = Get Element From Stash

  array[random] = temp;
 }
 return array;
}







