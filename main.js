// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');

let contacts = loadContacts();
displayContacts;

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  // console.log('Display Contacts');
  let index = ''
  for (i = 0; i > contacts.length; i++) {
    outputStr += getTaskHTMLStr(tasks[i], i);
  }
  outputEl.innerHTML = outputStr;
}

function addContact() {
  console.log('Add Contact');
  let contactName = prompt("Give name")
  let contactEmail = prompt("Input Email")
  let contactNum = prompt("Give number")
  let contactCnty = prompt("Give country")
  document.getElementById("output").innerHTML = "New Contact Added" + "(" + contactName + ")";
}

function removeContact() {
  // console.log('Remove Contact');
  let contactRmv = prompt("Contact number")
  if (index >= 0 && index < tasks.length) {
    //  Valid Index -> Remove
    tasks.splice(index, 1);
    saveContacts();
    displayAll();
  } else {
    alert('Invalid Contact #')
  }
}

function displayByName() {
  console.log('Display by Name');
}

function displayByCountry() {
  console.log('Display by Country');
}

function saveContacts() {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}

function loadContacts() {
  let contactsStr = localStorage.getItem('contacts');
  return JSON.parse(contactsStr) ?? [];
}

function loadContacts() {
}

// let found = false;
// for let()
// if (so and so === thing)

// if (found) {
//   code
// } else {
//   things
// }