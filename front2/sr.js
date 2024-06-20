const email = "m.rokkel@innopolis.university";
const apiEndpoint = "https://fwd.innopolis.university/api";

async function getID() {
  const response = await fetch(`${apiEndpoint}/hw2?email=${email}`);
  const id = await response.text();
  return id;
}

async function getComic(id) {
  const response = await fetch(`${apiEndpoint}/comic?id=${id}`);
  const comic = await response.json();
  return comic;
}


async function loadComic() {
  try {
    const id = await getID();
    const comic = await getComic(id);
    const container = document.getElementById("comic-container");
    container.innerHTML = '';
  
    const image = document.createElement('img');
    image.src = comic.img;
    image.alt = comic.alt;
    image.id = "comic-image";
  
    const title = document.createElement('h1');
    title.textContent = comic.safe_title;
    title.id = "comic-title";
  
    const date = document.createElement('h2');
    date.textContent = new Date(comic.year, comic.month - 1, comic.day).toLocaleDateString();
    date.id = "comic-id";
  
    const altText = document.createElement('p');
    altText.textContent = comic.alt;
    altText.id = "comic-alt";
  
    container.appendChild(title);
    container.appendChild(image);
    container.appendChild(date);
    container.appendChild(altText);
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('comic-container').textContent = 'Error';
  }
}

window.onload = loadComic;
