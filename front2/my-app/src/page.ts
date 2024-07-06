import { formatDistanceToNow } from 'date-fns';

interface Comic {
    img: string;
    alt: string;
    safe_title: string;
    year: number; 
    month: number; 
    day: string;
  }

const email: string = "m.rokkel@innopolis.university";
const apiEndpoint: string = "https://fwd.innopolis.university/api";

async function getID(): Promise<string> {
  const response = await fetch(`${apiEndpoint}/hw2?email=${email}`);
  const id: string = await response.text();
  return id;
}

async function getComic(id: string): Promise<Comic> {
  const response = await fetch(`${apiEndpoint}/comic?id=${id}`);
  const comic: Comic = await response.json();
  return comic;
}

async function loadComic(): Promise<void> {
    try {
      const id: string = await getID();
      const comic: Comic = await getComic(id);
      const container: HTMLElement = document.getElementById("comic-container")!;
      container.innerHTML = '';
    
      const image: HTMLImageElement = document.createElement('img');
      image.src = comic.img;
      image.alt = comic.alt;
      image.id = "comic-image";
    
      const title: HTMLHeadingElement = document.createElement('h1');
      title.textContent = comic.safe_title;
      title.id = "comic-title";
    
      const date: HTMLHeadingElement = document.createElement('h2');
      date.textContent = formatDistanceToNow(
        new Date(comic.year, comic.month - 1, parseInt(comic.day)) // Convert day to number
      );
      date.id = "comic-id";
    
      const altText: HTMLParagraphElement = document.createElement('p');
      altText.textContent = comic.alt;
      altText.id = "comic-alt";
    
      container.appendChild(title);
      container.appendChild(image);
      container.appendChild(date);
      container.appendChild(altText);
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('comic-container')!.textContent = 'Ошибка';
    }
}

window.onload = loadComic;
