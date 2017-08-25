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
  var form = document.getElementById('orderForm');
  form.reset();
}


var form = document.getElementById('orderForm');
if (form != null){
  var subButton = document.getElementById('submit-button');
  console.log(subButton);
  form.addEventListener('submit', processForm);
}



var form = document.getElementById('cart-form');
if (form != null){
  form.addEventListener('onload', displayOrder);
}

function onDelete() {
  deleteItem(event);
}

function deleteItem(event)
{
  var cart = JSON.parse(localStorage.getItem('cart'));
  var index = event.target.id;//araydaki hangisine bastiysa
  cart.splice(index, 1); // remove 1 element from array after index
  localStorage.setItem('cart', JSON.stringify(cart));
  var table = getElementsByTagName('table');
  var form = getElementsByTagName('form');
  form.removeChild('table');
  displayOrder();

}
function displayOrder(){
  removeEventListener('submit',processForm);
  var body = document.getElementsByTagName('body')[0];
  var cartForm = document.getElementsByTagName('cart_form')[0];
  if (localStorage.getItem('cart') === null){
   alert ('Your cart has no item in it.')
  }
  var cart = JSON.parse(localStorage.getItem('cart'));
  var table = document.createElement('table');
  var titleRow = document.createElement('tr');
  var columnName = document.createElement('td');
  columnName.innerText = 'Product Name';
  var columnQuantity = document.createElement('td');
  columnQuantity .innerText = 'Product Quantity';
  var columnImage = document.createElement('td');
  columnImage.innerText = 'Product Image';
  var columnButton = document.createElement('td');
  columnButton .innerText = 'Delete Item';
  table.appendChild(titleRow);
  titleRow.appendChild(columnName);
  titleRow.appendChild(columnQuantity);
  titleRow.appendChild(columnImage);
  titleRow.appendChild(columnButton);
  for(var i = 0; i < cart.length; i++){
    var img = document.createElement('img');
    img.src = cart[i].filePath;
    img.id = cart[i].productId;
    var row = document.createElement('tr');
    var column1 = document.createElement('td');
    var column2 = document.createElement('td');
    var column3 = document.createElement('td');
    var column4 = document.createElement('td');
    var button = document.createElement('button');
    button.setAttribute('type','submit');
    button.innerText = 'Delete this item';
    button.setAttribute('id',i);
    button.addEventListener('click',onDelete);


    column1.innerText = cart[i].productName;
    column2.innerText = cart[i].productQuantity;
    column3.appendChild(img);
    column4.appendChild(button);
    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);
    row.appendChild(column4);
    table.appendChild(row);
    }

    form.appendChild(table);
  }

//function processOrderCart(event){
  //event.preventDefault();

//  displayOrder();
//}
