/*  UC1
Ability to create a Address Book Contact with first and last names, address, city, state, zip, phone number
and email...
*/
console.log("Welcome to the Address Book Programme.");

class Contact{
    //Using Rest paameters to add multiple arguments
    constructor(...contactDetails){
        this.firstName = contactDetails[0];
        this.lastName = contactDetails[1];
        this.address = contactDetails[2];
        this.city = contactDetails[3];
        this.state = contactDetails[4];
        this.zip = contactDetails[5];
        this.phoneNumber = contactDetails[6];
        this.email = contactDetails[7];
    }
    //getter and setter method
    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get address(){
        return this._address;
    }

    get city(){
        return this._city;
    }

    get state(){
        return this._state;
    }

    get zip(){
        return this._zip;
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    get email(){
        return this._email;
    }

    set firstName(firstName){
        this._firstName = firstName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    set address(address){
        this._address = address;
    }

    set city(city){
        this._city = city;
    }

    set state(state){
        this._state = state;
    }

    set zip(zip){
        this._zip = zip;
    }

    set phoneNumber(phoneNumber){
        this._phoneNumber = phoneNumber;
    }

    set email(email){
        this._email = email;
    }

    toString(){
        return "First Name : "+ this.firstName + "\nLast Name : "+ this.lastName + "\nAddress : "+ this.address +"\nCity : "+ this.city + "\nState : "+ this.state +"\nZip : "+ this.zip+ "\nPhone Number : "+ this.phoneNumber + "\nEmail : "+ this.email;
    }
}

let contact = new Contact("Santhosh","Kumar", "2-3-603, Patel Nagar","Hyderabad", "Telangana", 500013, 9999999999,"santhosh@gmail.com");
console.log(contact.toString());