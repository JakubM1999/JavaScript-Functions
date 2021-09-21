//----------------- Declaring & Calling -------------------//

// Assigning functions to variables and return keyword 

/* This is an example of assigning functions to variables here I 
made a easy function that says my name and age first what I did
was to create a variable that is called "myFirstFunction then I
named these parameters "firstName" and "age" and what makes this
variable a function is this arrow "=>" that basicly stand for
"function".*/

/* You can also see an example of the return. Return statment
ends function execution and specifies a value to be returned
to the function caller or in other words it basicly is a 
finale result that you are goint to output. */

const myFirstFunction = (firstName, age) => {
    return "My name is " + firstName + " and I am " + age + " years old";
}

const hello = myFirstFunction("Jakub", 22)
console.log(hello)




//----------------QUESTIONS FROM THEME IDEA----------------//

// Array of contacts
var arrayOfContacts = [
    {
        name: "Jon",
        email: "jon@gmail.com"
    },
    {
        name: "Denerys",
        email: "denerys@gmail.com"
    },
    {
        name: "Jamie",
        email: "jamie@gmail.com"
    },
    {
        name: "Sam",
        email: "sam@gmail.com"
    },
    {
        name: "Bran",
        email: "bran@gmail.com"
    },
    {
        name: "Sansa",
        email: "sansa@gmail.com",
        phone: "12-12",
        company: "winterfell"
    },

]

console.log("----------------------------------------------------")

// 1.add( contact ) - Adds a new contact to the list

/* What I did here is a function that adds contact it also know, if
the contact has missing fields, is a duplicate and was added without
errors. I did this by creating a function and adding "if" which watches
if the contact fields are missing, then "else if" to see if the contact
is duplicated and "else" for "was added" if the conditions are met. */

const add = (newContact) => {
    if(newContact.name === undefined || newContact.email === undefined){
        console.log("Missing fields")

    }else if(arrayOfContacts.some((exsistingContact)=>{
        return (newContact.email === exsistingContact.email)
    }))
        console.log("Duplicate was found")
    else {

    return arrayOfContacts.push(newContact)}

}
add({
    name:"Sansa",
    email: "sansa@gmail.com"
})
add({
    email: "cercei@gmail.com"
})

add({ 
    name: "Cercei",
    email: "cercei@gmail.com"
})

console.log("Cercie's contact added ",arrayOfContacts)

// 2.remove(email)-Remove corresponding contact
//seperator

/* I made this with help of one of the students so this function is mostly build on
loops and then basic if...else method.*/
console.log("----------------------------------------------------")

function removeEmail(arrayOfContacts, email, value) {
    for(let i = 0; i<arrayOfContacts.length; i++){
        if(arrayOfContacts[i].email === value){
            return i;
        }
    }
    return -1;
}

function remove(email) {
    if (removeEmail(arrayOfContacts, "alex@gmail.com",email)<0){
        console.log("Contact not found.")
    }else {
        let index=removeEmail(arrayOfContacts,"denerys@gmail.com",email);
        arrayOfContacts.splice(index,1);
        console.log("Denerys's contact removed")
    }
}

remove ("alex@gmail.com")

remove ("denerys@gmail.com")

console.log(arrayOfContacts)

/* 3.Update/Increment the corresponding contact’s data with the
information that’s passed in / Email address is the unique identifier*/

/*This one is a map function that I used for the first time and I think that it went
pretty well basicly this function is letting you find specific property in one of the
object and then let's you update it. I'm sure that it has a lot more usess though*/

console.log("----------------------------------------------------")

const editEmail = arrayOfContacts.map((item) =>{
    if (item.email === "bran@gmail.com"){
        return {
           name: item.name = "Bran", email: item.email = "branStark@gmail.com"
        };
    }
    return item;
});

console.log ("Bran's contact has been updated. ",editEmail)

// 4.Output information for the corresponding contact.

/*I did have many ideas for this one but I figured out that I could use the code
that I wrote in the first question so I used that to output the error then again 
basic if...else.*/

console.log("----------------------------------------------------")
/*
if(contact not fount)
    return "contact not found"
else {
    return (arrayOfContact[3])
}
*/
let contactToGet;
const getContact = (email) => {
   if(!arrayOfContacts.some((exsistingContact, i) => { 
       const exsistingContactHasEmail = exsistingContact.email === email;
       if(exsistingContactHasEmail){
           contactToGet = i;
           console.log("Sansa's contact is number: ",i)
       }
       return exsistingContactHasEmail;
    })){
    console.log("contact not found")
   }else{
       console.log(email)
   }
}

getContact ("gus@gmail.com")

getContact ("sansa@gmail.com")



// 5. List all contacts available in the contact list
/* At this piont in this project I was more confident in my skills to make functions so 
this one was pretty easy all I did is a basic for loop and then combined it with
keys and value which outbut key and vaules of the object this is a very handy tool 
in my opinion.*/
console.log("----------------------------------------------------")

var listAll = () => {
    for (var i = 0; i < arrayOfContacts.length; i++) {
            for (var [key, value] of Object.entries(arrayOfContacts[i])){
            console.log(`${key}: ${value}`);
        }
        console.log("----------------------------------------------------")
    }
}
listAll();

// 6. Remove all contacts from the list
/*This was also an easy one this is a function that makes length of the array 0 which
means that it zero's out whole array and there for clearing whole contact list*/
const clearAll = () => {
    arrayOfContacts.length = 0;
    console.log("The List has been cleard");
}
clearAll();

console.log(arrayOfContacts)