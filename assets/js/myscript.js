// Opret et objekt kaldet "person" med felterne "navn", "alder" og "job"
let person = {
    navn: "Patrik",
    alder: 24,
    job: "Web Udvikler",
    
    // Tilføj en funktion kaldet "beskrivelse" til objektet
    beskrivelse: function() {
      return this.navn + " er " + this.alder + " år gammel og arbejder som " + this.job + ".";
    }
  };
  
  // Kald funktionen "beskrivelse" og udskriv resultatet
  let personBeskrivelse = person.beskrivelse();
  console.log(personBeskrivelse);



  // Opret et array af objekter, der repræsenterer personer
var personer = [
    { navn: "Patrik", alder: 24, job: "Web udvikler" },
    { navn: "Bo", alder: 55, job: "Lærer" },
    { navn: "Tim", alder: 77, job: "Vikar" },
  ];
  
  // Brug forEach til at udskrive alle personernes navne
  personer.forEach(function(person) {
    console.log(person.navn);
  });


// Opret et objekt kaldet "bil" med felterne "mærke", "model" og "år"
var bil = {
    mærke: "Ford",
    model: "Kuga",
    år: 2020
  };
  
  // Opret en person med navn, alder og en reference til bilobjektet
  var personMedBil = {
    navn: "Patrik",
    alder: 24,
    bil: bil // Her tilføjes bilobjektet som et felt i personobjektet
  };
  
  // Udskriv personens biloplysninger
  console.log(personMedBil.navn + " ejer en " + personMedBil.bil.mærke + " " + personMedBil.bil.model + " fra " + personMedBil.bil.år + ".");
  
  
  

  var kopiPerson = Object.assign({}, person);

// Opdater kopien med en ny alder
kopiPerson.alder = 35;

// Udskriv både originalen og kopien
console.log("Original person: ", person);
console.log("Kopi person: ", kopiPerson);