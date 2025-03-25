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
      resolve("Hente brukerdata!"); 
    }, 3000);
    });
    console.log(user);

    const viewUser = document.createElement("h2");
    viewUser.textContent = user;
    document.body.prepend(viewUser);
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
      resolve("Bruker er vist! "); 
    }, 3000);
    });
    console.log(user);
  } catch (error) { 
      console.log("Error lasting av brukerdata:" + error);
    }
  }
hvisBruker();


async function displayGjest() {
  try {
    let hei = "heisann"
    // let --> kan endre verdien til hei - til hole  , const ikke endre
    hei = "hola"
    console.log(hei);

  const user = await new Promise((resolve) => {
    setTimeout(function () {
      resolve("Dagens gjøremål"); 
    }, 3000);
    });
    console.log(user);

    const viewUser = document.createElement("h1");
    viewUser.textContent = user;
    document.body.prepend(viewUser);
  } catch (error) { 
      console.log("Error lasting av brukerdata:" + error);
    }
  }

displayGjest();