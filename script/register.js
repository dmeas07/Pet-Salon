// object literal
let petSalon ={
    // attributes
    name:"The Dog Father",
    phone:"619-xxx-xxxx",
    address:{
        state:"California",
        city:"San Diego",
        Street:"Mission Ave.",
        ZipCode:"92105",
    },
    pets:[]
}
// constructor
function Pet(name,age,gender,breed,ownerName,contactPhone,service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.owner = ownerName;
    this.phone = contactPhone;
    this.service = service;
    
}

function displaySalonInfo(){
    document.getElementById("info").innerHTML =`
    <p>${petSalon.name} is located in ${petSalon.address.city}, ${petSalon.address.state}</p>`;
}

let nameInput=document.getElementById("petName");
let ageInput=document.getElementById("petAge");
let genderInput=document.getElementById("petGender");
let breedInput=document.getElementById("petBreed");
let ownerInput=document.getElementById("petOwner");
let contactInput=document.getElementById("petContact");
let serviceSelector=document.getElementById("petService");

function register(){
    console.log(nameInput.value, ageInput.value,genderInput.value,breedInput.value, ownerInput.value, contactInput.value, serviceSelector.value);

    let thePets=new Pet(nameInput.value, ageInput.value, genderInput.value, breedInput.value, ownerInput.value, contactInput.value, serviceSelector.value);
    petSalon.pets.push(thePets);
    console.log(petSalon.pets);
    clearInputs();
}

function clearInputs(){
    nameInput.value="";
    ageInput.value="";
    genderInput.value="";
    breedInput.value="";
    ownerInput.value="";
    contactInput.value="";
    serviceSelector.value="";
    
}

function init(){
    console.log("Registering");
    displaySalonInfo();

    let scooby = new Pet("Scooby",60,"Male", "Dane", "grooming", "Shaggy", "444-444-4444");
    petSalon.pets.push(scooby);

    let keiko = new Pet("Keiko", 13, "Female", "Akita", "grooming", "Daravy", "444-444-4444");
    petSalon.pets.push(keiko);

    let luna = new Pet("Luna", 3, "Female", "German-Belgian Mix", "Grooming", "Daravy", "444-444-4444");
    petSalon.pets.push(luna);
}

window.onload=init;