async function getData() {
  return "Data er hentet!";
}

async function dataReceived() {
  const data = await getData();
  console.log(data);
}

//dataReceived();
setTimeout(dataReceived, 3000);

// Oppgave 1:
// Sett opp en async funksjon som returnere en string
// Sett opp en async funksjon som tar imot den første funksjonen 
// Sett opp en setTimeout som bruker5 sekunderpå å vise dataen 

async function hentData() {
  return "Data er levert!";
}

async function dataMottat() {
  const data = await hentData();
  console.log(data);
}

//dataReceived();
setTimeout(dataMottat, 1000);