console.log("Registering");
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

    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owners:"Shaggy",
            phone:"444-444-4444",
        },

        {
            name:"Scrappy",
            age:40,
            gender:"Male",
            breed:"mixed",
            service:"Nail Trim Only",
            owners:"Shaggy",
            phone:"444-444-4444",
        },

        {
            name:"Keiko",
            age:12,
            gender:"Feale",
            breed:"Akita",
            service:"Grooming",
            owners:"Daravy",
            phone:"619-444-4444",
        },

        {
            name:"Luna",
            age:3,
            gender:"Female",
            breed:"German-Belgian Mix",
            service:"Grooming",
            owners:"Daravy",
            phone:"619-444-4444",
        },
    ]
}



console.log(petSalon);

function displaySalonInfo(){
    document.getElementById("info").innerHTML =`
    <p>${petSalon.name} is located in ${petSalon.address.city}, ${petSalon.address.state}</p>`;

}
console.log(displaySalonInfo);

function displayPetNames(){
// use alert to display the amount of pets (alert(), length() is the hint

}
alert(
    "Number of registered pets is: " + petSalon.pets.length);

// travel the pets array
for(let i=0; i<petSalon.pets.length; i++){
    console.log(petSalon.pets[i]);
}
// display on the console



// displaySalonInfo();
