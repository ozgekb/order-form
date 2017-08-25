'use strict';

function Product (imageName, filePath, imageId, productQuantity){
  this.imageName = imageName;
  this.filePath = filePath;
  this.imageId = imageId;
  this.numShown = 0;
  this.numClicked = 0;
  this.productQuantity = 0;
}
var imageFileList = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg',
  'breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dogDuck.jpg',
  'dragon.jpg','pen.jpg','petSweep.jpg','scissors.jpg','shark.jpg','unicorn.jpg',
  'sweep.png','tauntaun.jpg','usb.gif','waterCan.jpg','wineGlass.jpg'];


  var cartArray = [];

  if(localStorage.getItem('haveItem')) {
   cartArray = JSON.parse(localStorage.getItem('haveItem'));
 }else{
    cartArray = new Product(dropDropdownMenu.value, 'img/' + dropDropdownMenu +'.jpg' ,dropDropdownMenu.selectedIndex, productQuantity);
 }
  console.log(event);
  console.log(this);
  var dropDropdownMenu = document.getElementById('product-dropdown');
  //console.log(dropDropdownMenu);
  console.log(dropDropdownMenu.selectedIndex);
  console.log(dropDropdownMenu.value);
  var productQuantity = parseInt(this.elements['productQuantity'].value);
  console.log(productQuantity);
  cartArray.push(dropDropdownMenu,productQuantity);


function processForm(event){
  event.preventDefault();//stop form from actually sending data elsewher
  //imageList = JSON.parse(localStorage.main);
  //theForm.reset();
}
var form = document.getElementById('orderForm');
var subButton = document.getElementById('submit-button');
console.log(subButton);
form.addEventListener('submit', processForm);

localStorage.setItem('haveItem',JSON.stringify(cartArray));
