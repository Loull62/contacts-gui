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
  let outputStr = ''
  for (i = 0; i > contacts.length; i++) {
    outputStr += showContacts(contacts[i], i);
  }
  outputEl.innerHTML = outputStr;
}

function showContacts(contacts, i) {
  return `
  <div class=" ${i}: ${contacts.name}">
  ${contacts.email}
  ${contacts.num} (${contacts.ctny})
  </div>
  `;
}

function addContact() {
  console.log('Add Contact');
  let contactName = +prompt("Give name")
  let contactEmail = +prompt("Input Email")
  let contactNum = +prompt("Give number")
  let contactCnty = +prompt("Give country")
  // document.getElementById("output").innerHTML = 
  contacts.push(newContact(contactName, contactEmail, contactNum, contactCnty));
  saveContacts();
  displayContacts();
}

function newContact(contactNames, contactEmails, contactNums, contactCntys) {
  return {
    name: contactNames,
    email: contactEmails,
    num: contactNums,
    cnty: contactCntys,
  };
}

function removeContact() {
  // console.log('Remove Contact');
  let contactRmv = prompt("Contact number")
  if (contactRmv >= 0 && contactRmv < tasks.length) {
    //  Valid Index -> Remove
    tasks.splice(index, 1);
  } else {
    alert('Invalid Contact #')
  }
  saveContacts();
  displayAll();
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

// let found = false;
// for let()
// if (so and so === thing)

// if (found) {
//   code
// } else {
//   things
// }