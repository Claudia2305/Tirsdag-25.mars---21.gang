async function getData() {
  return "Data er hentet!";
}

async function dataReceived() {
  const data = await getData();
  console.log(data);
}

//dataReceived();
setTimeout(dataReceived, 1000);

console.log("Mens vi venter...");
console.log("Spis en cupcake...");


// Oppgave 1:
// Sett opp en async funksjon som returnere en string
// Sett opp en async funksjon som tar imot den første funksjonen 
// Sett opp en setTimeout som bruker5 sekunderpå å vise dataen 
//

async function hentData() {
  return "Data er levert!";
}

async function dataMottat() {
  const data = await hentData();
  console.log(data);
}

//dataReceived();
setTimeout(dataMottat, 2000);

async function displayUser() {
  try {
  const user = await new Promise((resolve) => {
    setTimeout(function () {
      resolve("Brukerdata er lastet inn!"); 
    }, 3000);
    });
    console.log(user);
  } catch (error) { 
      console.log("Error lasting av brukerdata:" + error);
    }
  }

displayUser();

// Oppgave 2:
// Lag en async funksjom som bruker try/catch metoden for å gjennomføre koden
// Lag en variabel i try som tar imot et løfte som blir løst med en setTimeout
//Sett opp at catch gir personlig beskjed og en error om det skjer en feil


async function hvisBruker() {
  try {
  const user = await new Promise((resolve) => {
    setTimeout(function () {
      resolve("Brukerdata er lastet inn!"); 
    }, 3000);
    });
    console.log(user);
  } catch (error) { 
      console.log("Error lasting av brukerdata:" + error);
    }
  }

displayUser();


