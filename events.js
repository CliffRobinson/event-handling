// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one()
  
  // Your turn! Create a new function called `two`, then call it from here.
  two();
  three();
  four();
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')
  
  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue)

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite)
}

// CREATE FUNCTION two HERE

function two () {
  let two = document.getElementById('two');

  two.addEventListener('mouseenter', makeGreen);
  two.addEventListener('mouseleave', makeWhite);
}


// CREATE FUNCTION three HERE

function three () {
  let three = document.getElementById('three');

  three.addEventListener('mouseenter', makeOrange);
  three.addEventListener('mouseleave', makeWhite);
}

// CREATE FUNCTION four HERE

function four () {
  let four = document.getElementById('four');

  four.addEventListener('mouseenter', makeYellow);
  four.addEventListener('mouseleave', makeWhite);

  four.addEventListener('mousedown', dafoe);
  four.addEventListener('mouseup', undafoe);

}


// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}
/*
function changeColour(evt, colour){
  evt.target.style.backgroundColor = ''+colour+'';
}*/
// I would love to know why this doesn't work. 

function makeGreen(evt) {
  evt.target.style.backgroundColor = 'green';
}

function makeOrange(evt) {
  evt.target.style.backgroundColor = 'orange';
}

function makeYellow(evt) {
  evt.target.style.backgroundColor = 'yellow';
}

function dafoe(evt) {
  document.getElementById('two').innerHTML = '<img src="https://www.metro.us/sites/default/files/styles/normal_article/public/main/articles/2017/10/05/willem-dafoe-spiderman.jpg">';
  
}

function undafoe(evt) {
  document.getElementById('two').innerHTML = '';
}