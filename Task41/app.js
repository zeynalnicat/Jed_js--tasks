let id = prompt('Enter product id:');
let available;

switch (id) {
  case '1':
    available = 10;
    break;
  case '2':
    available = 256;
    break;
  case '3':
    available = 53;
    break;
  case '4':
    available = 3;
    break;
  default:
    available = 0;
}

if (available > 0) {
  alert(`Available ${available} pcs.`);
} else {
  alert('Out of stock');
}
