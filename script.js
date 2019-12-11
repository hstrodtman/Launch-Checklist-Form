// Write your JavaScript code here!

window.addEventListener('load', function(){
  
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
      return response.json()
      .then(function (response) {
         let marsArray = response[3]; 
         let missionTarget= document.querySelector("#missionTarget"); 
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${marsArray.name}</li>
            <li>Diameter: ${marsArray.diameter}</li>
            <li>Star: ${marsArray.star}</li>
            <li>Distance from Earth: ${marsArray.distance}</li>
            <li>Number of Moons: ${marsArray.moons}</li>
         </ol>
         <img src="${marsArray.image}">
         `; 
      })
  }) 

   let form = document.querySelector('form');  
   let pilotName = document.querySelector("#pilotName"); 
   let coPilotName = document.querySelector('input[name=copilotName]'); 
   let fuelLevel = document.querySelector('input[name=fuelLevel]'); 
   let cargoMass = document.querySelector('input[name=cargoMass]'); 
   let button = document.querySelector('#formSubmit'); 

   button.addEventListener("click", function (event){
      if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      } 
      if (isNaN(Number(fuelLevel.value)) || typeof pilotName.value !== 'string' || typeof coPilotName.value !== 'string' || isNaN(Number(cargoMass.value)) ) {
         alert("Invalid entry"); 
         event.preventDefault();
      }
      let faultyItems = document.querySelector("#faultyItems"); 
      let fuelStatus = document.querySelector('#fuelStatus'); 
      let launchStatus = document.querySelector("#launchStatus");   
      let cargoStatus = document.querySelector("#cargoStatus"); 
      let pilotStatus = document.querySelector('#pilotStatus'); 
      let copilotStatus = document.querySelector("#copilotStatus"); 
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`; 
      copilotStatus.innerHTML = `Copilot ${coPilotName.value} is ready for launch`; 
      
      if(fuelLevel.value < 10000) {
         faultyItems.style.visibility = "visible"; 
         fuelStatus.innerHTML = "Fuel level too low for launch."; 
         launchStatus.innerHTML = "Shuttle not ready for launch"; 
         launchStatus.style.color = "red"; 
      }
      
      if(cargoMass.value > 10000){
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Shuttle Mass too high for launch." 
         launchStatus.innerHTML = "Shuttle not ready for launch"; 
         launchStatus.style.color = "red"; 
      }  
         
      if(fuelLevel.value > 10000 && cargoMass.value < 10000){
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle is ready for launch."; 
         launchStatus.style.color = "green";
      }
// I'm not understanding why the page reloads and the CSS values are only briefly displayed. 
   })
     
})




