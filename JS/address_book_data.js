// <!-- UC-4 - Add Form Validations -->

class Contact {

    get id() {
    return this._id;
    }
    set id(id) {
    this._id = id;
    }

    get name() {
    return this._name;
    }
    set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{2,}$"); //must start with Capital Letter and must have at least 3 Characters
    if (nameRegex.test(name)) {
    this._name = name;
    } else {
    throw "Name is Invalid!";
    }
    }

    get address() {
    return this._address;
    }
    set address(address) {
    let addressRegex = RegExp("^[a-zA-Z]{1}[a-zA-Z\\s]{2,}$"); //should have multiple words and each word should be at least 3 characters
    if (addressRegex.test(address)) {
    this._address = address;
    } else {
        throw "Address is Invalid!";
    }
    }

    get city() {
    return this._city;
    }
    set city(city) {
    this._city = city;
    }

    get state() {
    return this._state;
    }
    set state(state) {
    this._state = state;
    }

    get zip() {
    return this._zip;
    }
    set zip(zip) {
    let zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
    if (zipRegex.test(zip)) {
        this._zip = zip;
    } else {
        throw "Zip is Invalid!";
    }
    }

    get phoneNumber() {
    return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
    let phoneNumberRegex = RegExp("^[0-9]{2}\\s{1}[7-9]{1}[0-9]{9}$");
    if (phoneNumberRegex.test(phoneNumber)) {
        this._phoneNumber = phoneNumber;
    } else {
        throw "Phone Number is Invalid!";
    }   
    }

// <!-- UC-7 - Populate the Address Book Contact Class and capture the user Entry using getters and setters -->

toString(){
    return "Id = " + this.id +" \n"+ "Name = " + this.name +"\n"+ "Address = " + this.address+"\n" + "City = " + this.city +"\n"+ "state = " + this.state+"\n" + "zip = " + this.zip+"\n" + "phone Number = " + this.phoneNumber};
}    