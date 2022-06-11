// <!-- UC-8 - Ability to Add the Address Book Entry into an Address Book List and store it in Local Storage -->

const createAndUpdateStorage = (contact) => {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
    if (contactList != undefined) {
    contactList.push(contact);
    } else {
    contactList = [contact];
    }
alert(contact.toString());
    alert("Contact Added Sucessfully");
    console.log(contactList);
    localStorage.setItem("ContactList", JSON.stringify(contactList));
}