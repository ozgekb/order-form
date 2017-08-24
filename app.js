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

var imageList = [];
if (localStorage.getItem('main')) {
  imageList = JSON.parse(localStorage.main);
} else {
  for (var i = 0; i < imageFileList.length; i++){
    var newProduct = new Product(imageFileList[i], 'img/' + imageFileList[i], i);
    imageList.push(newProduct);
  }
}

function processForm(event){
  event.preventDefault();//stop form from actually sending data elsewher
  console.log(event);
  console.log(this);
  var dropDropdownMenu = document.getElementById('product-dropdown');
  //console.log(dropDropdownMenu);
  console.log(dropDropdownMenu.selectedIndex);
  var productQuantity = parseInt(this.elements['productQuantity'].value);
  console.log(productQuantity);
  //theForm.reset();
}
var form = document.getElementById('orderForm');
var subButton = document.getElementById('submit-button');
console.log(subButton);
form.addEventListener('submit', processForm);
