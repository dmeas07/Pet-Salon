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
let c=0
function Pet(name,age,gender,breed,ownerName,contactPhone,service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.owner = ownerName;
    this.phone = contactPhone;
    this.service = service;
    this.id=c++;
    
}

function displaySalonInfo(){
    
}

let nameInput=document.getElementById("petName");
let ageInput=document.getElementById("petAge");
let genderInput=document.getElementById("petGender");
let breedInput=document.getElementById("petBreed");
let ownerInput=document.getElementById("petOwner");
let contactInput=document.getElementById("petContact");
let serviceSelector=document.getElementById("petService");

function isValid(aPet){
    let valid = true;

    if(aPet.name =="" || aPet.service==""|| aPet.phone==""){
        valid=false;
    }

    return valid;
}

function register(){
    console.log(nameInput.value, ageInput.value,genderInput.value,breedInput.value, ownerInput.value, contactInput.value, serviceSelector.value);

    let thePets=new Pet(nameInput.value, ageInput.value, genderInput.value, breedInput.value, ownerInput.value, contactInput.value, serviceSelector.value);

    if(isValid(thePets)){

        petSalon.pets.push(thePets);

        clearInputs();

        displayPetTable();
    
    }

    else{
        alert("Please add the required information")
    }

    
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

    let scooby = new Pet("Scooby",60,"Male", "Dane","Shaggy", "444-444-4444","Grooming",);
    petSalon.pets.push(scooby);

    let keiko = new Pet("Keiko", 13, "Female", "Akita", "Daravy", "444-444-4444", "Grooming");
    petSalon.pets.push(keiko);

    let luna = new Pet("Luna", 3, "Female", "German-Belgian Mix", "Daravy", "444-444-4444", "Grooming");
    petSalon.pets.push(luna);

    displayPetTable();
}

function deletePet(id){
    let removeIndex; 
   
    for(let i=0; i<petSalon.pets.length; i++) {

        let pet = petSalon.pets[i];

        if(pet.id==id){

            removeIndex = i;
        }
    }
    petSalon.pets.splice(removeIndex,1);

    document.getElementById(id).remove();

}

function search (){
    let searchString = document.getElementById("search").value;

    let searchIndex;

    for(let i=0; i<petSalon.pets.length; i++) {

        let pet = petSalon.pets[i];

        if(pet.name==searchString){
    
            searchString = i;
        }
    
    }
}

window.onload=init;