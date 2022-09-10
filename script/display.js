function displayPetTable(){
    const petsTbl = document.getElementById("petTable");
    petsTbl.innerHTML=``;
    // travel the array
    for(let i = 0; i<petSalon.pets.length; i++){
        // get the pet 
        let pet=petSalon.pets[i];
        // create the template
        let tr = `
            <tr id="${pet.id}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.owner}</td>
                <td>${pet.phone}</td>
                <td>${pet.service}</td>
                <td><button onclick="deletePet(${pet.id})">❌</button></td>
            </tr>
        `;
        // insert the template into HTML
        petsTbl.innerHTML += tr;
    }
}