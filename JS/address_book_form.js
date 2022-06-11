// <!-- UC-4 - Add Form Validations -->

window.addEventListener("DOMContentLoaded", (event) => {

// <!-- UC-7 - Populate the Address Book Contact Class and capture the user Entry using getters and setters -->

    ValidateName();
    ValidatePhoneNumber();
    ValidateAddress();
    validateZipcode();
});

    const ValidateName = () => {     // Added UC-7
        const name = document.querySelector("#name");
        name.addEventListener("input", function () {
        if (name.value.length == 0) {
            setTextValue(".name-error", "");
            return;
        }
        try {
            new Contact().name = name.value;
            setTextValue(".name-error", "");
        } catch (error) {
            setTextValue(".name-error", error);
        }
        });   
    };

    const ValidateAddress = () => {     // Added UC-7
        const address = document.querySelector("#address");
        address.addEventListener("input", function () {
        if (address.value.length == 0) {
            setTextValue(".address-error", "");
            return;
        }
        try {
            new Contact().address = address.value;
            setTextValue(".address-error", "");
        } catch (error) {
            setTextValue(".address-error", error);
        }
        });
    };

    const validateZipcode = () => {     // Added UC-7
        const zip = document.querySelector("#zip");
        zip.addEventListener("input", function () {
        if (zip.value.length == 0) {
            setTextValue(".zip-error", "");
            return;
        }
        try {
            new Contact().zip = zip.value;
            setTextValue(".zip-error", "");
        } catch (error) {
            setTextValue(".zip-error", error);
        }
        });
    };
        
    const ValidatePhoneNumber = () => {     // Added UC-7
        const phoneNumber = document.querySelector("#phoneNumber");
        phoneNumber.addEventListener("input", function () {
        if (phoneNumber.value.length == 0) {
        setTextValue(".tel-error", "");
        return;
    }
    try {
        new Contact().phoneNumber = phoneNumber.value;
        setTextValue(".tel-error", "");
    } catch (error) {
        setTextValue(".tel-error", error);
    }
    });
};

// <!-- UC-6 - On clicking Submit Button to the following:  -->
// <!-- UC-8 - Ability to Add the Address Book Entry into an Address Book List and store it in Local Storage -->

function save ()  {     //Added UC-8
    try {
    let contact = createContact();
    console.log(contact);
    createAndUpdateStorage(contact);
    } catch (error) {
    alert(error);
    }
};

const createContact = () => { 
    let contact = new Contact();
    contact.id = id();
    function id() {
        var id =  Math.floor(Math.random()*100);
        if (JSON.parse(localStorage.getItem("ContactList")).find(x =>x.id === id)){
            id();
        }else{
            return id;  
        }
    }

    try {
    contact.name = getInputValueById("#name");
    } catch (error) {
    setTextValue(".name-error", error);
    throw error;
    }

    try {
    contact.phoneNumber = getInputValueById("#phoneNumber");
    } catch (error) {
    setTextValue(".tel-error", error);
    throw error;
    }

    try {
    contact.address = getInputValueById("#address");
    } catch (error) {
    setTextValue(".address-error", error);
    throw error;
    }
    
    let city = getInputValueById("#city");
    if (city != "Select City") {
    contact.city = city;
    } else {
    throw "Please select city";
    }

    let state = getInputValueById("#state");
    if (state != "Select State") {
    contact.state = state;
    } else {
    throw "Please select state";
    }

    try {
    contact.zip = getInputValueById("#zip");
    } catch (error) {
    setTextValue(".zip-error", error);
    throw error;
    }

    alert(contact.toString());     // Added UC-7
    return contact;     //Added UC-8
};   

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
};

function getInputValueById(property) {
    let value = document.querySelector(property).value;
    return value;
}