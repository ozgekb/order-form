'use strict';

function Product (productName, filePath, productId, productQuantity){
  this.productName = productName;
  this.filePath = filePath;
  this.productId = productId;
  this.productQuantity =  productQuantity;
}
var imageFileList = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg',
  'breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dogDuck.jpg',
  'dragon.jpg','pen.jpg','petSweep.jpg','scissors.jpg','shark.jpg','unicorn.jpg',
  'sweep.png','tauntaun.jpg','usb.gif','waterCan.jpg','wineGlass.jpg'];



//  var menu = document.getElementById('product-dropdown');
  //id = menu.options[menu.selectedIndex].value;
  //console.log(id);
  //name  = menu.options[menu.value];
  //console.log(name);
  //quantity = parseInt(this.elements['productQuantity'].value);
//  console.log(quantity);



function addToCart(product){
  if (localStorage.getItem('cart') === null){
    var cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  cart = JSON.parse(localStorage.getItem('cart'));
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function processForm(event){
  event.preventDefault();
  console.log(event);
  console.log(this);
  var dropDropdownMenu = document.getElementById('product-dropdown');
  var id = dropDropdownMenu.selectedIndex;
  console.log(dropDropdownMenu.selectedIndex);
  var name = dropDropdownMenu.value;
  console.log(dropDropdownMenu.value);
  var productQuantity = parseInt(this.elements['productQuantity'].value);

  var newProduct = new Product(name, 'img/' + name ,id, productQuantity);
  addToCart(newProduct);
}


var form = document.getElementById('orderForm');
var subButton = document.getElementById('submit-button');

form.addEventListener('submit', processForm);
