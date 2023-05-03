const url = "https://www.halvorvl.com/";


async function getTeams() {
  const response = await fetch(url);

  const result = await response.json();

  console.log(result);
}

getTeams();
